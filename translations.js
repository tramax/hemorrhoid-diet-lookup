// UI text translations
export const uiText = {
  en: {
    title: "Hemorrhoid Diet Lookup",
    subtitle:
      "Check how a food is likely to affect your stool after hemorrhoid surgery. This tool focuses on stool output, softness, hardening risk, and stickiness to help you choose foods that minimise pain when passing motion.",
    searchPlaceholder:
      "Search by food name or category (e.g. salmon, pho, fruit)...",
    clear: "Clear",
    filterCategory: "Filter by category",
    filterSuitability: "Filter by suitability",
    loading: "Loading food database…",
    noResults: "No foods found.",
    noResultsTip:
      "Tip: relax filters or search by main ingredient (e.g. 'fish', 'rice', 'soup').",
    resultsCount: (count) => `Showing ${count} item(s).`,
    footer:
      "This tool is for educational purposes only and does not replace professional medical advice. Always follow your surgeon's or doctor's specific instructions.",
    labels: {
      stoolOutput: "Stool output",
      softness: "Softness",
      hardeningRisk: "Hardening risk",
      stickiness: "Stickiness",
    },
    categoryAll: "All",
    suitabilityAll: "All",
    suitabilityLabels: [
      "Excellent",
      "Good",
      "Acceptable",
      "Poor",
      "Very Poor",
    ],
  },
  vi: {
    title: "Tra cứu thực phẩm cho bệnh trĩ",
    subtitle:
      "Kiểm tra xem một loại thực phẩm có thể ảnh hưởng đến phân như thế nào sau phẫu thuật trĩ. Công cụ này tập trung vào lượng phân, độ mềm, nguy cơ bị khô cứng và độ dính của phân để giúp bạn chọn thực phẩm giảm đau khi đi tiêu.",
    searchPlaceholder:
      "Tìm theo tên hoặc nhóm thực phẩm (ví dụ: cá hồi, phở, trái cây)...",
    clear: "Xoá",
    filterCategory: "Lọc theo nhóm thực phẩm",
    filterSuitability: "Lọc theo mức độ phù hợp",
    loading: "Đang tải dữ liệu thực phẩm…",
    noResults: "Không tìm thấy thực phẩm phù hợp.",
    noResultsTip:
      "Gợi ý: nới lỏng bộ lọc hoặc tìm theo nguyên liệu chính (ví dụ: 'cá', 'cơm', 'súp').",
    resultsCount: (count) => `Hiển thị ${count} món.`,
    footer:
      "Công cụ này chỉ mang tính tham khảo, không thay thế ý kiến bác sĩ. Luôn làm theo hướng dẫn cụ thể của bác sĩ hoặc phẫu thuật viên.",
    labels: {
      stoolOutput: "Lượng phân",
      softness: "Độ mềm",
      hardeningRisk: "Nguy cơ bị khô cứng",
      stickiness: "Độ dính / trơn",
    },
    categoryAll: "Tất cả",
    suitabilityAll: "Tất cả",
    suitabilityLabels: [
      "Rất phù hợp",
      "Phù hợp",
      "Chấp nhận được",
      "Hạn chế",
      "Rất không phù hợp",
    ],
  },
};

// Value translations for metrics & suitability
export const valueTranslations = {
  vi: {
    StoolOutput: {
      "Very low": "Rất ít",
      Low: "Ít",
      Moderate: "Vừa",
      High: "Nhiều",
      "Very high": "Rất nhiều",
    },
    StoolSoftness: {
      "Very soft": "Rất mềm",
      Soft: "Mềm",
      "Moderately soft": "Hơi mềm",
      Hard: "Cứng",
      "Very hard": "Rất cứng",
    },
    HardeningRisk: {
      "Very low": "Rất thấp",
      Low: "Thấp",
      Moderate: "Trung bình",
      High: "Cao",
      "Very high": "Rất cao",
    },
    Stickiness: {
      "Very smooth": "Rất trơn, dễ trôi",
      Smooth: "Trơn, khá dễ trôi",
      Neutral: "Bình thường",
      Sticky: "Hơi dính",
      "Very sticky": "Rất dính, dễ gây đau",
    },
    GlobalSuitabilityScore: {
      Excellent: "Rất phù hợp",
      Good: "Phù hợp",
      Acceptable: "Chấp nhận được",
      Poor: "Hạn chế",
      "Very Poor": "Rất không phù hợp",
    },
  },
};

// Recommendation translations
export const recommendationTranslations = {
  vi: {
    "Generally excellent for soft stools; consume freely unless bloated.":
      "Nhìn chung rất tốt để làm phân mềm; có thể dùng thường xuyên trừ khi bạn cảm thấy đầy hơi.",
    "Can increase stool bulk; limit during recovery.":
      "Có thể làm phân to và nhiều; nên hạn chế trong giai đoạn hồi phục.",
    "Very gentle on digestion; highly recommended.":
      "Rất nhẹ nhàng cho đường ruột; nên ưu tiên lựa chọn.",
    "Safe in moderation; pair with fluids.":
      "An toàn nếu dùng vừa phải; nên kết hợp với nhiều nước hoặc canh.",
    "Raw textures may be irritating; cook until soft.":
      "Ăn sống có thể gây cọ xát và khó chịu; nên nấu chín mềm trước khi ăn.",
    "Good choice when cooked well.":
      "Lựa chọn tốt nếu được nấu chín mềm.",
    "Excellent; natural oils improve lubrication.":
      "Rất tốt; chất béo tự nhiên giúp bôi trơn phân, giảm đau khi đi tiêu.",
    "Low residue but may harden stools; combine with soups.":
      "Ít bã nhưng dễ làm phân cứng; nên ăn kèm nhiều nước, canh hoặc rau mềm.",
    "Generally softening; good addition unless lactose intolerant.":
      "Thường giúp làm phân mềm; rất hữu ích trừ khi bạn không dung nạp lactose.",
    "Often constipating; minimize during recovery.":
      "Dễ gây táo bón; nên hạn chế tối đa trong thời gian hồi phục.",
    "Hydrating and softening; excellent support for recovery.":
      "Giúp bổ sung nước và làm phân mềm; rất hỗ trợ cho quá trình hồi phục.",
    "Real-life stool effect varies; consume small portions and monitor.":
      "Ảnh hưởng lên phân thay đổi theo từng người; nên ăn lượng nhỏ và theo dõi phản ứng.",
    "Safe in moderation.":
      "An toàn nếu dùng vừa phải; quan sát thêm phản ứng cơ thể.",
    "Adds bulk and rougher texture; limit if bulky stool worsens pain.":
      "Tăng lượng phân và hơi thô; hạn chế nếu phân to làm bạn đau hơn.",
    "Less bulky and easier to tolerate; good in small portions with fluids.":
      "Ít tạo bã và dễ tiêu hơn; dùng lượng nhỏ kèm nhiều nước sẽ tốt hơn.",
    "Hard seeds can irritate and increase stool bulk; avoid during recovery.":
      "Hạt cứng có thể gây cọ xát và làm phân to hơn; nên tránh trong giai đoạn hồi phục.",
    "Still high fibre; use small portions and chew well.":
      "Vẫn chứa nhiều chất xơ; nên ăn lượng nhỏ và nhai kỹ.",
    "Sugary drink with pearls can increase stool stickiness and constipation; avoid during recovery.":
      "Đồ uống nhiều đường kèm trân châu có thể làm phân dính và dễ táo bón; nên tránh khi đang hồi phục.",
    "High sugar and low fibre may harden stool; limit during recovery.":
      "Hàm lượng đường cao và ít chất xơ có thể làm phân cứng; nên hạn chế trong giai đoạn hồi phục.",
    "Gentle and hydrating; suitable for recovery.":
      "Nhẹ nhàng và bổ sung nước tốt; phù hợp trong giai đoạn hồi phục.",
    "Provides lubrication and keeps stool soft; useful during recovery.":
      "Giúp bôi trơn và làm phân mềm; hữu ích trong thời gian hồi phục.",
    "May cause gas or bloating; use sparingly if sensitive.":
      "Có thể gây đầy hơi hoặc chướng bụng; dùng ít nếu bạn nhạy cảm.",
    "Best taken cooked and soft to reduce irritation.":
      "Nên ăn khi đã nấu chín mềm để giảm kích ứng.",
    "Can be tough to digest; chew thoroughly and use in moderation.":
      "Có thể khó tiêu; nên nhai kỹ và dùng với lượng vừa phải.",
    "High fat content may cause discomfort; small amounts only.":
      "Hàm lượng chất béo cao có thể gây khó chịu; chỉ nên dùng ít.",
    "Fermented but high in sugar; limit intake.":
      "Có lợi khuẩn nhưng chứa nhiều đường; nên hạn chế.",
    "Hard fragments may irritate the anal canal; avoid during recovery.":
      "Mảnh cứng có thể gây cọ xát ống hậu môn; nên tránh trong thời gian hồi phục.",
    "May cause dryness or firm stool; drink extra water if consumed.":
      "Có thể làm phân khô hoặc cứng; nếu dùng, hãy uống thêm nhiều nước.",
    "Soft and broth-rich; generally well tolerated.":
      "Mềm và nhiều nước; nhìn chung dễ tiêu và dễ chịu.",
    "High oil content may thicken stool; limit until fully healed.":
      "Lượng dầu cao có thể làm phân đặc hơn; nên hạn chế cho đến khi hồi phục hoàn toàn.",
  },
};


// Food name translations
export const foodTranslations = {
  vi: {
    // Fruits
    "Papaya": "Đu đủ",
    "Mango (ripe)": "Xoài chín",
    "Mango (green)": "Xoài xanh",
    "Banana (ripe)": "Chuối chín",
    "Banana (unripe)": "Chuối xanh",
    "Apple (with skin)": "Táo (còn vỏ)",
    "Apple (without skin)": "Táo (gọt vỏ)",
    "Pear": "Lê",
    "Watermelon": "Dưa hấu",
    "Dragon fruit (white)": "Thanh long ruột trắng",
    "Dragon fruit (red)": "Thanh long ruột đỏ",
    "Kiwi (green)": "Kiwi xanh",
    "Kiwi (yellow)": "Kiwi vàng",
    "Orange": "Cam",
    "Pineapple": "Dứa (thơm)",
    "Grapes": "Nho",
    "Guava (with seeds)": "Ổi (có hạt)",
    "Guava (seedless)": "Ổi (ít hạt / không hạt)",
    "Lychee": "Vải",
    "Longan": "Nhãn",
    "Rambutan": "Chôm chôm",
    "Mangosteen": "Măng cụt",
    "Durian": "Sầu riêng",
    "Jackfruit": "Mít",
    "Pomelo": "Bưởi",

    // Grains / carbs
    "White rice": "Cơm trắng",
    "Brown rice": "Gạo lứt",
    "Jasmine rice": "Gạo thơm Jasmine",
    "Japanese rice": "Gạo Nhật",
    "Sticky rice": "Xôi / gạo nếp",
    "Congee": "Cháo trắng",
    "Rice vermicelli": "Bún",
    "Pho noodles": "Bánh phở",
    "Kway teow": "Hủ tiếu / phở xào bản to",
    "Hokkien noodles": "Mì Hokkien",
    "Yellow noodles": "Mì vàng / mì trứng",
    "Instant noodles (fried)": "Mì gói (chiên)",
    "Instant noodles (non-fried)": "Mì gói (không chiên)",
    "Banh mi": "Bánh mì Việt Nam",
    "White bread": "Bánh mì trắng",
    "Whole wheat bread": "Bánh mì nguyên cám",
    "Multigrain bread": "Bánh mì ngũ cốc",
    "Quinoa": "Hạt diêm mạch (quinoa)",
    "Barley": "Lúa mạch / bo bo",
    "Rolled oats": "Yến mạch cán dẹt",
    "Instant oats": "Yến mạch ăn liền",
    "Chia seeds": "Hạt chia",
    "Flax seeds": "Hạt lanh",
    "Sweet potato": "Khoai lang",
    "Korean sweet potato": "Khoai lang Hàn Quốc",
    "Potato (boiled)": "Khoai tây luộc",
    "Potato (fried)": "Khoai tây chiên",
    "Taro": "Khoai môn",
    "Yam": "Khoai sọ / khoai mỡ",
    "Corn": "Bắp (ngô)",

    // Vegetables
    "Spinach": "Rau chân vịt (cải bó xôi)",
    "Bok choy": "Cải thìa",
    "Choy sum": "Cải ngọt",
    "Kang kong": "Rau muống",
    "Broccoli": "Bông cải xanh",
    "Cauliflower": "Súp lơ trắng",
    "Cabbage": "Bắp cải",
    "Lettuce": "Xà lách",
    "Romaine": "Xà lách Romaine",
    "Iceberg lettuce": "Xà lách Iceberg",
    "Tomato (raw)": "Cà chua sống",
    "Tomato (cooked)": "Cà chua nấu chín",
    "Carrot (raw)": "Cà rốt sống",
    "Carrot (steamed)": "Cà rốt hấp / luộc",
    "Pumpkin": "Bí đỏ",
    "Winter melon": "Bí đao",
    "Bitter gourd": "Khổ qua / mướp đắng",
    "Long beans": "Đậu đũa",
    "French beans": "Đậu cô ve",
    "Okra": "Đậu bắp",
    "Eggplant": "Cà tím",
    "Daikon": "Củ cải trắng",
    "Kimchi": "Kim chi",
    "Sauerkraut": "Dưa cải muối chua kiểu Đức",
    "Mushroom (shiitake)": "Nấm hương / nấm đông cô",
    "Mushroom (enoki)": "Nấm kim châm",
    "Onion": "Hành tây",
    "Garlic": "Tỏi",
    "Seaweed": "Rong biển",
    "Bean sprouts": "Giá đỗ",

    // Protein
    "Chicken breast": "Ức gà",
    "Chicken thigh": "Đùi gà",
    "Chicken skin": "Da gà",
    "Seabass": "Cá vược / cá chẽm",
    "Red snapper": "Cá hồng",
    "Salmon (steamed)": "Cá hồi hấp",
    "Salmon (raw)": "Cá hồi sống (sashimi)",
    "Tuna": "Cá ngừ",
    "Mackerel": "Cá thu",
    "Sardines (water)": "Cá mòi hộp (ngâm nước)",
    "Sardines (oil)": "Cá mòi hộp (ngâm dầu)",
    "Pork lean": "Thịt heo nạc",
    "Pork belly": "Ba rọi / ba chỉ heo",
    "Char siu": "Thịt xá xíu",
    "Roast pork": "Thịt heo quay",
    "Beef steak": "Bít tết bò",
    "Beef brisket": "Gân / nạm bò hầm",
    "Pho brisket": "Thịt bò nạm trong phở",
    "Lamb": "Thịt cừu",
    "Duck": "Thịt vịt",
    "Soft tofu": "Đậu phụ non",
    "Firm tofu": "Đậu phụ cứng",
    "Tempeh": "Đậu nành lên men (tempeh)",
    "Fish balls": "Cá viên",
    "Fish cake": "Chả cá",
    "Prawn": "Tôm",
    "Crab meat": "Thịt cua",
    "Squid": "Mực",
    "Spam": "Thịt hộp (Spam)",
    "Soft-boiled egg": "Trứng luộc lòng đào",
    "Hard-boiled egg": "Trứng luộc chín",
    "Scrambled egg": "Trứng chiên ráo (scramble)",
    "Fried egg": "Trứng ốp la",
    "Century egg": "Trứng bách thảo",

    // Dairy
    "Fresh milk": "Sữa tươi",
    "Lactose-free milk": "Sữa không lactose",
    "Oat milk": "Sữa yến mạch",
    "Soy milk": "Sữa đậu nành",
    "Almond milk": "Sữa hạnh nhân",
    "Yogurt": "Sữa chua",
    "Yakult": "Sữa chua uống Yakult",
    "Ice cream": "Kem",
    "Cheddar cheese": "Phô mai Cheddar",
    "String cheese": "Phô mai sợi",
    "Whipped cream": "Kem tươi đánh bông",
    "Butter": "Bơ",
    "Margarine": "Bơ thực vật",
    "Condensed milk": "Sữa đặc có đường",
    "Evaporated milk": "Sữa cô đặc không đường",

    // Snacks
    "Almonds": "Hạnh nhân",
    "Cashews": "Hạt điều",
    "Peanuts": "Đậu phộng / lạc",
    "Walnuts": "Óc chó",
    "Sunflower seeds": "Hạt hướng dương",
    "Potato chips": "Khoai tây chiên lát (snack)",
    "Popcorn": "Bắp rang",
    "Seaweed snacks": "Rong biển ăn liền",
    "Milk chocolate": "Socola sữa",
    "Dark chocolate": "Socola đắng",
    "Mochi": "Bánh mochi",
    "Rice crackers": "Bánh gạo",
    "Cream crackers": "Bánh quy giòn",
    "Digestive biscuits": "Bánh quy nguyên cám (digestive)",
    "Marie biscuits": "Bánh quy Marie",
    "Granola": "Ngũ cốc granola",
    "Trail mix": "Hỗn hợp hạt khô (trail mix)",
    "Dried apricots": "Mơ khô",
    "Dried figs": "Vả khô",
    "Dried raisins": "Nho khô",
    "Dried prunes": "Mận khô (prune)",
    "Cupcakes": "Bánh cupcake",
    "Doughnuts": "Bánh donut",
    "Waffles": "Bánh waffle",
    "Croissants": "Bánh sừng bò",

    // Drinks & desserts
    "Water": "Nước lọc",
    "Coconut water": "Nước dừa",
    "Barley water": "Nước lúa mạch / nước bo bo",
    "Chrysanthemum tea": "Trà hoa cúc",
    "Green tea": "Trà xanh",
    "Black tea": "Trà đen",
    "Black coffee": "Cà phê đen",
    "Milk tea": "Trà sữa",
    "Bubble tea": "Trà sữa trân châu",
    "Fruit smoothies": "Sinh tố trái cây",
    "Orange juice": "Nước cam",
    "Apple juice": "Nước táo",
    "Sugarcane juice": "Nước mía",
    "Tau huay": "Tàu hũ nước đường / đậu hũ non tráng miệng",
    "Bird’s nest drink": "Nước yến",
    "Herbal soup": "Canh / nước thuốc bắc",
    "Chicken broth": "Nước dùng gà",
    "Pork broth": "Nước dùng heo",
    "Vegetable soup": "Canh rau",
    "Bone broth": "Nước hầm xương",
    "Agar jelly": "Thạch agar",
    "Grass jelly": "Sương sáo / thạch đen",
    "Sago dessert": "Chè trân châu / trân châu sago",
    "Ice kachang": "Đá bào Ice kachang",
    "Che ba mau": "Chè ba màu",

    // Dishes
    "Pho (full bowl)": "Phở bò (đầy đủ)",
    "Bun thit nuong": "Bún thịt nướng",
    "Com tam": "Cơm tấm",
    "Mi quang": "Mì Quảng",
    "Banh cuon": "Bánh cuốn",
    "Banh uot": "Bánh ướt",
    "Chicken rice": "Cơm gà Hải Nam",
    "Laksa": "Mì Laksa",
    "Bak chor mee": "Mì thịt bằm (Bak chor mee)",
    "Bak kut teh": "Sườn hầm thuốc bắc (Bak kut teh)",
    "Char kway teow": "Hủ tiếu xào / char kway teow",
    "Hokkien mee": "Mì Hokkien xào",
    "Yong tau foo": "Yong tau foo (đậu nhồi thịt và rau)",
    "Japanese curry rice": "Cơm cà ri Nhật",
    "Sushi rice": "Cơm sushi",
    "Sashimi": "Cá sống sashimi",
    "Bibimbap": "Cơm trộn Hàn Quốc (bibimbap)",
    "Japchae": "Miến xào Hàn Quốc (japchae)",
    "Miso soup": "Súp miso",
    "Hotpot ingredients": "Nguyên liệu lẩu",
    "Steamed bun": "Bánh bao chay / bánh bao trắng",
    "Char siew bun": "Bánh bao xá xíu",
    "Fried rice": "Cơm chiên",
    "Claypot rice": "Cơm niêu / cơm thố"
  }
};

// Category name translations
export const categoryTranslations = {
  vi: {
    Fruit: "Trái cây",
    Vegetable: "Rau củ",
    "Grains": "Ngũ cốc",
    Protein: "Thịt cá",
    Dairy: "Sữa & Chế phẩm",
    Snack: "Đồ ăn vặt",
    "Drinks": "Đồ uống",
    Dish: "Món ăn",
  },
};
