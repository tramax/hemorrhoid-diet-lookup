import {
  uiText,
  valueTranslations,
  recommendationTranslations,
  foodTranslations,
  categoryTranslations,
} from "./translations.js";

const CSV_FILE = "hemorrhoid_food_with_global_score.csv";

let allFoods = [];
let activeCategory = "All";
let activeSuitability = "All";

// Get language from URL or default to 'en'
const urlParams = new URLSearchParams(globalThis.location.search);
let currentLang = urlParams.get("lang") || "en";
if (!["en", "vi"].includes(currentLang)) {
  currentLang = "en";
}

const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");
const resultsCount = document.getElementById("resultsCount");
const categoryPills = document.getElementById("categoryPills");
const suitabilityPills = document.getElementById("suitabilityPills");
const clearBtn = document.getElementById("clearBtn");

function normalize(str) {
  return (str || "").toString().toLowerCase().trim();
}

function updateURLLanguage(lang) {
  const url = new URL(globalThis.location);
  url.searchParams.set("lang", lang);
  globalThis.history.pushState({}, "", url);
}

function suitabilityClass(label) {
  if (!label) return "";
  const x = label.toLowerCase();
  if (x.includes("excellent") || x.includes("rất phù hợp")) return "excellent";
  if (x.includes("good") || x.includes("phù hợp")) return "good";
  if (x.includes("acceptable") || x.includes("chấp nhận được"))
    return "acceptable";
  if (x.includes("very poor") || x.includes("rất không phù hợp"))
    return "very-poor";
  if (x.includes("poor") || x.includes("hạn chế")) return "poor";
  return "";
}

function translateMetricValue(category, value) {
  if (currentLang === "en") return value || "";
  const map = valueTranslations.vi[category] || {};
  return map[value] || value || "";
}

function translateSuitability(value) {
  if (currentLang === "en") return value || "";
  const map = valueTranslations.vi.GlobalSuitabilityScore || {};
  return map[value] || value || "";
}

function translateRecommendation(text) {
  if (currentLang === "en") return text || "";
  const map = recommendationTranslations.vi;
  return map[text] || text || "";
}

function getFoodDisplayName(foodName) {
  if (currentLang === "en") return foodName;
  const map = foodTranslations.vi;
  return map[foodName] || foodName;
}

function getCategoryDisplayName(categoryName) {
  if (currentLang === "en") return categoryName;
  const map = categoryTranslations.vi;
  return map[categoryName] || categoryName;
}

function renderCategoryPills() {
  const categories = Array.from(
    new Set(allFoods.map((f) => f.Category))
  ).sort((a, b) => a.localeCompare(b));
  const labelAll = uiText[currentLang].categoryAll;
  const all = ["All", ...categories];
  categoryPills.innerHTML = "";

  all.forEach((cat) => {
    const btn = document.createElement("button");
    const isAll = cat === "All";
    const displayLabel = isAll ? labelAll : getCategoryDisplayName(cat);
    btn.textContent = displayLabel;
    btn.className = "pill" + (cat === activeCategory ? " active" : "");

    btn.addEventListener("click", () => {
      activeCategory = cat;
      renderCategoryPills();
      renderResults();
    });

    categoryPills.appendChild(btn);
  });
}

function renderSuitabilityPills() {
  const labelsEn = [
    "All",
    "Excellent",
    "Good",
    "Acceptable",
    "Poor",
    "Very Poor",
  ];
  const labels = uiText[currentLang].suitabilityLabels;
  suitabilityPills.innerHTML = "";

  labelsEn.forEach((labelEn, idx) => {
    const isAll = labelEn === "All";
    const btn = document.createElement("button");
    const displayLabel = isAll
      ? uiText[currentLang].suitabilityAll
      : labels[idx - 1];
    btn.textContent = displayLabel;
    btn.className =
      "pill" + (labelEn === activeSuitability ? " active" : "");

    btn.addEventListener("click", () => {
      activeSuitability = labelEn;
      renderSuitabilityPills();
      renderResults();
    });

    suitabilityPills.appendChild(btn);
  });
}

function renderResults() {
  const query = normalize(searchInput.value);
  let filtered = allFoods;

  if (activeCategory !== "All") {
    filtered = filtered.filter((f) => f.Category === activeCategory);
  }

  if (activeSuitability !== "All") {
    filtered = filtered.filter(
      (f) =>
        (f.GlobalSuitabilityScore || "").toLowerCase() ===
        activeSuitability.toLowerCase()
    );
  }

  if (query) {
    filtered = filtered.filter(
      (f) =>
        normalize(f.Food).includes(query) ||
        normalize(f.Category).includes(query) ||
        normalize(getFoodDisplayName(f.Food)).includes(query) ||
        normalize(getCategoryDisplayName(f.Category)).includes(query)
    );
  }

  resultsDiv.innerHTML = "";

  if (!allFoods.length) {
    resultsCount.textContent = uiText[currentLang].loading;
    return;
  }

  if (!filtered.length) {
    resultsCount.textContent = uiText[currentLang].noResults;
    const msg = document.createElement("div");
    msg.className = "no-results";
    msg.textContent = uiText[currentLang].noResultsTip;
    resultsDiv.appendChild(msg);
    return;
  }

  resultsCount.textContent = uiText[currentLang].resultsCount(filtered.length);

  filtered.forEach((f) => {
    const card = document.createElement("div");
    card.className = "card";

    const header = document.createElement("div");
    header.className = "card-header";

    const left = document.createElement("div");
    const foodName = document.createElement("div");
    foodName.className = "food-name";
    foodName.textContent = getFoodDisplayName(f.Food);

    const category = document.createElement("div");
    category.className = "category-tag";
    category.textContent = getCategoryDisplayName(f.Category);

    left.appendChild(foodName);
    left.appendChild(category);

    const right = document.createElement("div");
    const badge = document.createElement("div");
    const rawLabel = f.GlobalSuitabilityScore || "";
    const label = translateSuitability(rawLabel);
    badge.className = "badge " + suitabilityClass(rawLabel || label);
    badge.textContent =
      label || (currentLang === "en" ? "Not rated" : "Chưa đánh giá");
    right.appendChild(badge);

    header.appendChild(left);
    header.appendChild(right);
    card.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "grid";

    function addMetric(labelKey, valueRaw, metricCategoryKey) {
      const icons = {
        stoolOutput: "🏔️",
        softness: "💧",
        hardeningRisk: "🪵",
        stickiness: "🍯",
      };

      const block = document.createElement("div");
      block.className = "metric-block";

      const l = document.createElement("div");
      l.className = "label";
      l.textContent = `${icons[labelKey]} ${uiText[currentLang].labels[labelKey]}`;

      const v = document.createElement("div");
      v.className = "value";
      v.textContent = translateMetricValue(metricCategoryKey, valueRaw);

      block.appendChild(l);
      block.appendChild(v);
      grid.appendChild(block);
    }

    addMetric("stoolOutput", f.StoolOutput, "StoolOutput");
    addMetric("softness", f.StoolSoftness, "StoolSoftness");
    addMetric("hardeningRisk", f.HardeningRisk, "HardeningRisk");
    addMetric("stickiness", f.Stickiness, "Stickiness");

    card.appendChild(grid);

    if (f.Recommendation) {
      const rec = document.createElement("div");
      rec.className = "recommendation";
      rec.textContent = translateRecommendation(f.Recommendation);
      card.appendChild(rec);
    }

    resultsDiv.appendChild(card);
  });
}

function applyLanguage() {
  const t = uiText[currentLang];
  document.getElementById("titleText").textContent = t.title;
  document.getElementById("subtitleText").textContent = t.subtitle;
  searchInput.placeholder = t.searchPlaceholder;
  clearBtn.textContent = t.clear;
  document.getElementById("categoryFilterLabel").textContent = t.filterCategory;
  document.getElementById("suitabilityFilterLabel").textContent =
    t.filterSuitability;
  document.getElementById("footerText").textContent = t.footer;

  renderCategoryPills();
  renderSuitabilityPills();
  renderResults();
}

function loadCsv() {
  Papa.parse(CSV_FILE, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      allFoods = results.data
        .map((row) => ({
          Category: row.Category || "",
          Food: row.Food || "",
          StoolOutput: row.StoolOutput || "",
          StoolSoftness: row.StoolSoftness || "",
          HardeningRisk: row.HardeningRisk || "",
          Stickiness: row.Stickiness || "",
          Recommendation: row.Recommendation || "",
          GlobalSuitabilityScore:
            row.GlobalSuitabilityScore || row.GlobalSuitability || "",
        }))
        .filter((f) => f.Food);

      renderCategoryPills();
      renderSuitabilityPills();
      renderResults();
    },
    error: function (err) {
      resultsCount.textContent =
        (currentLang === "en"
          ? "Error loading CSV: "
          : "Lỗi khi tải dữ liệu: ") + err.message;
    },
  });
}

// Events
searchInput.addEventListener("input", renderResults);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderResults();
  searchInput.focus();
});

document.getElementById("btnEn").addEventListener("click", () => {
  currentLang = "en";
  updateURLLanguage("en");
  document.getElementById("btnEn").classList.add("active");
  document.getElementById("btnVi").classList.remove("active");
  applyLanguage();
});

document.getElementById("btnVi").addEventListener("click", () => {
  currentLang = "vi";
  updateURLLanguage("vi");
  document.getElementById("btnVi").classList.add("active");
  document.getElementById("btnEn").classList.remove("active");
  applyLanguage();
});

// Init
// Set initial button state based on URL language
if (currentLang === "vi") {
  document.getElementById("btnVi").classList.add("active");
  document.getElementById("btnEn").classList.remove("active");
} else {
  document.getElementById("btnEn").classList.add("active");
  document.getElementById("btnVi").classList.remove("active");
}

applyLanguage();
loadCsv();
