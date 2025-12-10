// UI text translations
export const uiText = {
  en: {
    title: "Hemorrhoid Diet Lookup",
    subtitle:
      "Check how a food is likely to affect your stool after hemorrhoid surgery. This tool focuses on stool output, softness, hardening risk, and stickiness to help you choose foods that minimise pain when passing motion.",
    infoShow: "What is this?",
    infoHide: "Hide info",
    searchPlaceholder:
      "Food name or category (salmon, pho, fruit)",
    clear: "Clear",
    filterCategory: "Category",
    filterSuitability: "Suitability",
    loading: "Loading food database…",
    noResults: "No foods found.",
    noResultsTip:
      "Tip: relax filters or search by main ingredient (e.g. fish, rice, soup).",
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
    infoShow: "Đây là gì?",
    infoHide: "Ẩn thông tin",
    searchPlaceholder:
      "Tìm theo tên hoặc nhóm thực phẩm (ví dụ: cá hồi, phở, trái cây)...",
    clear: "Xoá",
    filterCategory: "Lọc theo nhóm thực phẩm",
    filterSuitability: "Lọc theo mức độ phù hợp",
    loading: "Đang tải dữ liệu thực phẩm…",
    noResults: "Không tìm thấy thực phẩm phù hợp.",
    noResultsTip:
      "Gợi ý: nới lỏng bộ lọc hoặc tìm theo nguyên liệu chính (ví dụ: cá, cơm, súp).",
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

export const recommendationTranslations = {
  vi: {
    "A bit firmer but still gentle; good choice in soups and stews.":
      "Hơi chắc hơn nhưng vẫn khá mềm; là lựa chọn tốt trong các món canh hoặc hầm.",
    "Best hydration source; consistently softens stool.":
      "Nguồn bổ sung nước tốt nhất; luôn hỗ trợ làm phân mềm hơn.",
    "Better than seeded; still high fibre.":
      "Đỡ cọ xát hơn loại có hạt nhưng vẫn chứa khá nhiều chất xơ.",
    "Blended fruit becomes dense and sticky; may firm stool.":
      "Trái cây xay nhuyễn trở nên đặc và dính; có thể làm phân chắc hơn.",
    "Boiled or steamed sweet potato contains water and fibre that ...n stool; best eaten mashed or in small chunks, not deep-fried.":
      "Khoai lang luộc hoặc hấp chứa nhiều nước và chất xơ giúp ...n phân; tốt nhất nên ăn nghiền hoặc cắt miếng nhỏ, tránh chiên ngập dầu.",
    "Broken rice and grilled pork are dry and firm; increases stool hardness and pain.":
      "Cơm tấm và thịt nướng khô, chắc; dễ làm phân cứng hơn và tăng đau khi đi ngoài.",
    "Broth hydrates, but ribs are chewy; peppery versions may irritate.":
      "Nước dùng giúp bổ sung nước nhưng sườn khá dai; phiên bản nhiều tiêu có thể gây kích ứng và rát.",
    "Broth provides hydration and soft noodles help stool pass easily; avoid tendon and choose brisket or chicken.":
      "Nước dùng giúp bổ sung nước và sợi mì mềm hỗ trợ phân đi qua dễ dàng; nên tránh gân bò và chọn thịt nạm hoặc thịt gà.",
    "Broth softens but spice and oil irritate; avoid if anal area is sensitive.":
      "Nước dùng giúp làm mềm nhưng dầu mỡ và vị cay có thể gây kích ứng; nên tránh nếu vùng hậu môn đang rất nhạy cảm.",
    "Caffeine and tannins may firm stool; limit intake.":
      "Caffeine và tanin có thể làm phân cứng hơn; nên hạn chế lượng uống.",
    "Can be a bit dry; take with broth or sauce and chew well.":
      "Có thể hơi khô; nên ăn kèm nước dùng hoặc sốt và nhai kỹ.",
    "Can be slightly oily and crisp at the edges; better if cooked gently with little oil.":
      "Có thể hơi nhiều dầu và giòn ở viền; nên chiên/nấu với ít dầu và lửa nhỏ sẽ tốt hơn.",
    "Can firm up stool; choose soft-boiled or scrambled instead.":
      "Có thể làm phân cứng hơn; nên ưu tiên trứng lòng đào hoặc trứng khuấy thay thế.",
    "Chewy texture; may increase stool firmness and discomfort.":
      "Thớ thịt dai; có thể làm phân chắc hơn và tăng khó chịu khi đi ngoài.",
    "Choose soup base, tofu, and soft veg; avoid fried items.":
      "Nên chọn nước dùng, đậu hũ và rau mềm; tránh các món chiên.",
    "Choose tofu, soft vegetables and broth; avoid fried items, meatballs, and mala base.":
      "Nên chọn đậu hũ, rau mềm và nước dùng; tránh đồ chiên, viên thịt và nước lẩu mala.",
    "Clinically shown to help constipation.":
      "Đã được chứng minh lâm sàng là hỗ trợ giảm táo bón.",
    "Cocoa can firm stool; consume minimally.":
      "Ca cao có thể làm phân chắc hơn; chỉ nên dùng rất ít.",
    "Concentrated milk with minimal fibre; may harden stool.":
      "Sữa cô đặc gần như không có chất xơ; có thể làm phân cứng hơn.",
    "Contains seeds that may irritate; remove if sensitive.":
      "Có hạt có thể gây cọ xát, kích ứng; nên bỏ hạt nếu bạn nhạy cảm.",
    "Dry and oily; highly constipating and dehydrating.":
      "Vừa khô vừa nhiều dầu; rất dễ gây táo bón và làm cơ thể mất nước.",
    "Dry and oily; one of the most constipating rice dishes.":
      "Khô và nhiều dầu; là một trong những món cơm dễ gây táo bón nhất.",
    "Dry bun and sticky sweet filling make stool denser and harder.":
      "Vỏ bánh khô cùng nhân ngọt dính khiến phân đặc và cứng hơn.",
    "Dry buttery pastry dries stool and increases hardness.":
      "Bánh nhiều bơ và khô làm phân khô hơn và tăng độ cứng.",
    "Dry noodles, peanuts, and minimal broth create dense stool; unsuitable during recovery.":
      "Mì khô, đậu phộng và ít nước dùng tạo phân đặc và nén; không phù hợp trong giai đoạn hồi phục.",
    "Dry refined flour leads to harder stool.":
      "Bột tinh luyện dạng khô khiến phân cứng hơn.",
    "Dry refined flour; strongly constipating.":
      "Bột tinh luyện khô; rất dễ gây táo bón.",
    "Dry, crispy rice and oily meats create very firm stool.":
      "Cơm cháy khô và thịt nhiều dầu khiến phân rất chắc và khó đi.",
    "Dry, fibrous textures; may be uncomfortable if stool is already bulky.":
      "Kết cấu khô và nhiều xơ; dễ gây khó chịu nếu phân vốn đã to và nhiều.",
    "Dry white rice and oily chicken skin may lead to firm stool; add soup if consuming.":
      "Cơm trắng khô và da gà nhiều mỡ dễ làm phân chắc; nếu ăn nên kèm thêm nhiều canh.",
    "Electrolytes support hydration and stool softness.":
      "Chất điện giải giúp giữ nước và hỗ trợ làm phân mềm.",
    "Extremely dry; absorbs moisture and hardens stool.":
      "Rất khô; hút bớt nước trong ruột và làm phân cứng hơn.",
    "Extremely high sugar causes dehydration and sticky stool.":
      "Lượng đường cực cao làm cơ thể mất nước và tạo phân dính.",
    "Extremely high sugar; can significantly harden stool. Avoid.":
      "Lượng đường cực lớn có thể làm phân cứng rõ rệt; nên tránh.",
    "Extremely soft and hydrating; ideal during early recovery.":
      "Rất mềm và nhiều nước; đặc biệt phù hợp trong giai đoạn hồi phục sớm.",
    "Fat can lubricate stool but is heavy; use small portions.":
      "Chất béo có thể bôi trơn phân nhưng khá nặng; nên ăn lượng nhỏ.",
    "Fatty meat; can lubricate stool but is heavy—use small portions.":
      "Thịt nhiều mỡ có thể bôi trơn phân nhưng khá nặng bụng; chỉ nên ăn ít.",
    "Fermented and acidic; may cause gas and discomfort.":
      "Lên men và có tính axit; dễ gây đầy hơi và khó chịu.",
    "Fermented and high in fibre; can cause gas in some people, so use small portions.":
      "Lên men và nhiều chất xơ; dễ gây đầy hơi ở một số người nên chỉ dùng lượng nhỏ.",
    "Fermented, spicy, and fibrous; can irritate and worsen pain.":
      "Món lên men, cay và nhiều xơ; dễ gây kích ứng và làm cơn đau nặng hơn.",
    "Fibrous and sticky; may harden stool.":
      "Vừa nhiều xơ vừa hơi dính; có thể làm phân chắc và khó đi.",
    "Fibrous core may irritate; use small portions.":
      "Phần lõi nhiều xơ có thể gây cọ xát; nên ăn lượng nhỏ.",
    "Fibrous stems; remove and cook well.":
      "Cuống và thân nhiều xơ; nên bỏ phần cứng và nấu chín kỹ.",
    "Fragrant white rice with low fibre; similar to other white rice and may contribute to harder stool if eaten alone.":
      "Gạo trắng thơm nhưng ít chất xơ; giống các loại cơm trắng khác và có thể làm phân cứng nếu ăn một mình.",
    "Fresh flat rice noodles in broth; generally soft and hydrating if eaten with plenty of soup.":
      "Bánh phở tươi trong nước dùng thường mềm và giàu nước; nên ăn kèm nhiều nước súp.",
    "Fried and sugary; strongly dehydrating to stool.":
      "Vừa chiên vừa nhiều đường; làm phân khô và cứng rõ rệt.",
    "Fructose load tends to increase stool stickiness.":
      "Lượng fructose cao có xu hướng làm phân dính hơn.",
    "Generally neutral for stool; acceptable if tolerated.":
      "Tác động khá trung tính lên phân; có thể dùng nếu cơ thể dung nạp tốt.",
    "Gentle on digestion; good alternative for lactose intolerance.":
      "Nhẹ nhàng với tiêu hóa; là lựa chọn tốt nếu bạn không dung nạp lactose.",
    "Glutinous rice forms extremely sticky stool; avoid.":
      "Gạo nếp tạo phân cực kỳ dính; nên tránh.",
    "Glutinous rice is very sticky and dense; can form hard lumps of stool and is best avoided during recovery.":
      "Gạo nếp rất dính và đặc; dễ tạo cục phân cứng nên tốt nhất tránh trong giai đoạn hồi phục.",
    "Ground flax provides soluble and insoluble fibre and gentle o...ol and acts as a mild natural laxative if fluids are adequate.":
      "Hạt lanh xay cung cấp cả chất xơ hòa tan và không hòa tan cùng o...ol nhẹ; có tác dụng nhuận tràng nhẹ nếu uống đủ nước.",
    "Healthy but gassy; cook well and use small portions.":
      "Bổ nhưng dễ gây đầy hơi; nên nấu chín kỹ và ăn lượng nhỏ.",
    "High FODMAP; gas increases anorectal pain.":
      "Giàu FODMAP nên dễ gây đầy hơi; khí trong ruột làm đau vùng hậu môn – trực tràng nhiều hơn.",
    "High fat and sugar; can make stool sticky.":
      "Nhiều chất béo và đường; có thể khiến phân dính và khó đi.",
    "High fat; limited benefit for stool softness.":
      "Nhiều chất béo nhưng lợi ích cho độ mềm của phân không nhiều.",
    "High fat; may cause discomfort; small amounts only.":
      "Nhiều chất béo, có thể gây khó chịu; chỉ nên dùng lượng nhỏ.",
    "High fructose content may dehydrate stool; limit intake.":
      "Hàm lượng fructose cao có thể làm phân khô hơn; nên uống/ăn ít.",
    "High insoluble fiber; bulky stool and harder to pass.":
      "Nhiều chất xơ không hòa tan; làm phân to, cứng và khó đi hơn.",
    "High insoluble fiber; rough and can firm stool.":
      "Nhiều chất xơ không hòa tan, khá ráp; dễ làm phân chắc và khó đi.",
    "High insoluble fiber; scratchy residue increases stool bulk and pain.":
      "Nhiều chất xơ không hòa tan với phần bã ráp; làm phân to hơn và tăng đau khi đi ngoài.",
    "High insoluble fibre; can harden stool.":
      "Nhiều chất xơ không hòa tan; có thể làm phân cứng hơn.",
    "High sugar and fat may harden stool; limit during recovery.":
      "Nhiều đường và chất béo có thể làm phân cứng; nên hạn chế trong thời gian hồi phục.",
    "High sugar and fat; may harden stool.":
      "Nhiều đường và chất béo; có thể làm phân đặc và khó đi.",
    "High sugar and low fibre may harden stool; limit during recovery.":
      "Nhiều đường và ít chất xơ; dễ khiến phân cứng hơn, nên hạn chế trong giai đoạn hồi phục.",
    "High sugar makes stool sticky despite fiber content.":
      "Nhiều đường khiến phân dính hơn dù vẫn có chất xơ.",
    "High sugar; limit during recovery.":
      "Nhiều đường; nên hạn chế trong lúc đang hồi phục.",
    "High sugar; may cause stickiness.":
      "Hàm lượng đường cao; có thể làm phân dính hơn.",
    "High sugar; may produce sticky stool.":
      "Nhiều đường; có thể tạo phân dính và khó rời khỏi thành hậu môn.",
    "High water and enzymes; excellent for soft stool.":
      "Nhiều nước và enzyme hỗ trợ tiêu hóa; rất tốt để làm phân mềm.",
    "High water and soluble fiber; very stool-softening.":
      "Giàu nước và chất xơ hòa tan; hỗ trợ làm phân mềm rõ rệt.",
    "High water content; helps soften stool.":
      "Hàm lượng nước cao; giúp phân mềm và dễ đi hơn.",
    "Higher fibre than white bread and can soften stool, but increases bulk; introduce gradually and drink enough water.":
      "Nhiều chất xơ hơn bánh mì trắng và có thể làm phân mềm hơn, nhưng cũng làm phân to hơn; nên tăng dần lượng ăn và uống đủ nước.",
    "Higher insoluble fibre softens stool but increases bulk; bet...er in later recovery and in small portions with plenty of fluid.":
      "Chất xơ không hòa tan cao giúp ...er phân mềm hơn nhưng làm tăng thể tích phân; phù hợp hơn ở giai đoạn hồi phục sau và với khẩu phần nhỏ, kèm nhiều nước.",
    "Highly dehydrating; one of the worst for constipation.":
      "Làm cơ thể rất dễ mất nước; là một trong những thực phẩm dễ gây táo bón nhất.",
    "Highly processed, low-fibre and dehydrating; frequent intake is linked with constipation and should be avoided in recovery.":
      "Chế biến sẵn, ít chất xơ và dễ làm cơ thể mất nước; ăn thường xuyên liên quan đến táo bón nên nên tránh trong thời gian hồi phục.",
    "Highly processed, salty and fatty; can worsen constipation and stool stickiness.":
      "Thực phẩm chế biến sẵn, mặn và nhiều mỡ; có thể làm táo bón nặng hơn và tăng độ dính của phân.",
    "Hull fragments are rough and increase irritation risk.":
      "Lớp vỏ cứng và ráp làm tăng nguy cơ cọ xát và kích ứng.",
    "Hydrating and mild; good choice.":
      "Giàu nước và khá nhẹ nhàng; là lựa chọn tốt.",
    "Hydrating and softening.":
      "Giúp bổ sung nước và có xu hướng làm phân mềm hơn.",
    "Hydrating and softening; excellent support for recovery.":
      "Giúp bổ sung nước và làm phân mềm; rất hỗ trợ cho quá trình hồi phục.",
    "Hydrating herbal drink; soothing and gentle.":
      "Thức uống thảo mộc giúp bổ sung nước; dịu và dễ chịu.",
    "Hydrating liquid but can cause gas and bloating in some people; use small portions.":
      "Giúp bổ sung nước nhưng có thể gây đầy hơi, chướng bụng ở một số người; nên uống lượng nhỏ.",
    "Intact skins can pass through and irritate; not ideal if pain is severe.":
      "Lớp vỏ còn nguyên có thể đi ra gần như nguyên vẹn và gây cọ xát; không phù hợp nếu bạn đang rất đau.",
    "Lean and soft when cooked gently; chew well and avoid very dry versions.":
      "Thịt nạc sẽ mềm nếu nấu dịu lửa; nên nhai kỹ và tránh các phiên bản nướng/chiên khô.",
    "Legumes can increase gas; monitor your tolerance.":
      "Đậu có thể làm tăng đầy hơi; nên theo dõi khả năng dung nạp của bản thân.",
    "Light and hydrating; choose unsweetened versions.":
      "Nhẹ, giúp bổ sung nước; nên chọn loại không đường.",
    "Liquid helps hydration but sugar reduces benefit; keep portions small.":
      "Dạng lỏng giúp bổ sung nước nhưng đường làm giảm lợi ích đó; nên dùng khẩu phần nhỏ.",
    "Low fibre; may firm stool if eaten alone.":
      "Ít chất xơ; có thể làm phân chắc hơn nếu ăn một mình.",
    "Low residue but no stool-softening benefit; acceptable.":
      "Ít bã nhưng hầu như không giúp làm phân mềm; vẫn có thể dùng được.",
    "Mild caffeine may dehydrate; consume with extra water.":
      "Caffeine nhẹ có thể làm cơ thể mất nước; nên uống kèm thêm nước lọc.",
    "Moderate fibre and sugar; use small portions.":
      "Lượng chất xơ và đường ở mức vừa; nên dùng khẩu phần nhỏ.",
    "Mucilage lubricates stool and makes passing easier.":
      "Nhựa nhớt (mucilage) giúp bôi trơn phân và làm việc đi ngoài dễ dàng hơn.",
    "Neutral effect on stool; choose unsweetened versions.":
      "Ảnh hưởng trung tính lên phân; nên chọn phiên bản không đường.",
    "Nuts and dried fruit increase stool bulk and stickiness.":
      "Các loại hạt và trái cây sấy làm phân to hơn và dính hơn.",
    "Oats contain soluble fibre that forms a gentle gel, helping p...roduce soft, easy-to-pass stools when taken with enough fluid.":
      "Yến mạch chứa chất xơ hòa tan tạo lớp gel nhẹ, giúp p...ra phân mềm và dễ đi hơn khi uống kèm đủ nước.",
    "Oats soften but nuts and sugar increase density; small portions only.":
      "Yến mạch giúp mềm phân nhưng hạt và đường làm món ăn đặc hơn; chỉ nên ăn khẩu phần nhỏ.",
    "Often contains seeds and whole grains; can help softness but ...stool bulkier and may irritate if many hard seeds are present.":
      "Thường chứa hạt và ngũ cốc nguyên hạt; có thể giúp mềm phân nhưng cũng làm ...phân to hơn và đôi khi gây xốn nếu có nhiều hạt cứng.",
    "Often oily and salty; acceptable in small portions.":
      "Thường hơi nhiều dầu và muối; dùng được nếu chỉ ăn lượng nhỏ.",
    "Often served fried with oil; can become sticky and dry in the gut, so limit while wounds are fresh.":
      "Thường được chiên với nhiều dầu; dễ trở nên khô và dính trong ruột, nên hạn chế khi vết thương còn mới.",
    "Often sugary; limited stool-softening effect.":
      "Thường khá ngọt; tác dụng làm mềm phân không nhiều.",
    "Oily and dehydrating; produces sticky stool that is painful to pass.":
      "Nhiều dầu và làm cơ thể mất nước; tạo phân dính gây đau khi đi ngoài.",
    "Oily and rich; may cause discomfort in large portions.":
      "Nhiều dầu và khá ngậy; ăn nhiều có thể gây khó chịu.",
    "Oily fish with soft texture; natural oils help stool lubrication.":
      "Cá béo thịt mềm; lượng dầu tự nhiên giúp bôi trơn phân.",
    "Oily fish; can help keep stool from becoming too dry.":
      "Cá nhiều dầu có thể giúp phân không bị khô quá.",
    "Oily yellow noodles with seafood create firm sticky stool.":
      "Mì vàng nhiều dầu với hải sản dễ tạo phân chắc và dính.",
    "Plain boiled or mashed potato is gentle but low in fibre; pair with soft vegetables and soups to avoid overly firm stools.":
      "Khoai tây luộc hoặc nghiền khá nhẹ nhàng nhưng ít chất xơ; nên ăn kèm rau mềm và canh để tránh phân quá đặc.",
    "Probiotics helpful but high sugar; use small portions.":
      "Men vi sinh có ích nhưng đồ uống thường nhiều đường; chỉ nên dùng khẩu phần nhỏ.",
    "Probiotics may support softer stool; good choice.":
      "Men vi sinh có thể hỗ trợ làm phân mềm hơn; là lựa chọn khá tốt.",
    "Processed fish product; acceptable in soup but not ideal in large amounts.":
      "Sản phẩm cá chế biến; dùng trong món nước thì tạm ổn nhưng không nên ăn lượng lớn.",
    "Processed wheat/egg noodles; can be dense and constipating, especially when stir-fried and not taken with soup.":
      "Mì làm từ bột mì/trứng đã qua chế biến; có thể đặc và dễ gây táo bón, đặc biệt khi xào khô và không ăn kèm nước dùng.",
    "Processed white bread is low in fibre and may worsen constipation if eaten in large amounts without fruits or vegetables.":
      "Bánh mì trắng tinh luyện ít chất xơ và có thể làm táo bón nặng hơn nếu ăn nhiều mà không kèm trái cây hoặc rau.",
    "Raw vegetables, rice, and spicy paste increase stool hardness and irritation.":
      "Rau sống, cơm và sốt cay làm phân cứng hơn và dễ gây kích ứng.",
    "Refined flour + sugar + fat create dense, sticky stool.":
      "Bột tinh luyện + đường + chất béo tạo phân đặc và dính.",
    "Refined flour bun is dense and dry; tends to form firm stool.":
      "Bánh làm từ bột tinh luyện đặc và khô; dễ làm phân chắc và cứng.",
    "Refined rice noodles; better in soup than fried, but does not itself soften stool—pair with soft vegetables and fluids.":
      "Bún/mì gạo tinh luyện ăn với canh sẽ đỡ hơn xào khô nhưng bản thân không giúp làm mềm phân; nên ăn kèm rau mềm và uống đủ nước.",
    "Refined, low-fibre rice; can make stool small and firm if eaten as the main carb without soups, fruits or vegetables.":
      "Cơm trắng tinh luyện ít chất xơ; nếu ăn như nguồn tinh bột chính mà không kèm canh, trái cây hay rau sẽ dễ làm phân nhỏ và cứng.",
    "Rice cooked with a lot of water into porridge; very gentle, low-residue and ideal when pain is severe.":
      "Cơm nấu với rất nhiều nước thành cháo; rất nhẹ nhàng, ít bã và lý tưởng khi cơn đau còn nhiều.",
    "Rich in soluble fiber; very stool-softening.":
      "Giàu chất xơ hòa tan; giúp làm phân mềm rõ rệt.",
    "Rich in soluble fibre that softens stool but also adds bulk; use small portions with plenty of fluid.":
      "Nhiều chất xơ hòa tan giúp làm mềm phân nhưng cũng làm phân to hơn; nên ăn khẩu phần nhỏ kèm nhiều nước.",
    "Rough skins can irritate; peel if your anal area is very sensitive.":
      "Vỏ ráp có thể gây cọ xát; nên gọt vỏ nếu vùng hậu môn đang rất nhạy cảm.",
    "Rough skins may irritate if your anal area is sensitive.":
      "Lớp vỏ ráp có thể gây kích ứng nếu vùng hậu môn nhạy cảm.",
    "Serving size is small; low impact on stool.":
      "Khẩu phần thường nhỏ; tác động lên phân không nhiều.",
    "Short-grain sticky rice that clumps easily; can form dense stool and increase straining.":
      "Gạo hạt tròn, dẻo và dễ vón cục; có thể tạo phân đặc khiến phải rặn nhiều hơn.",
    "Similar to taro; soft when boiled but can still be quite starchy, so combine with fluids and vegetables.":
      "Tương tự khoai môn; khi luộc thì mềm nhưng vẫn khá nhiều tinh bột, nên ăn kèm nước và rau.",
    "Skin adds bulk; limit if bulky stool increases pain.":
      "Lớp vỏ làm tăng khối lượng phân; nên hạn chế nếu phân to làm bạn đau.",
    "Slow-cooked brisket has softer texture; better than steak but still red meat.":
      "Ức bò hầm lâu sẽ mềm hơn; tốt hơn thịt bò nướng/áp chảo nhưng vẫn là thịt đỏ.",
    "Soft and easy to digest; one of the best egg preparations during recovery.":
      "Mềm và dễ tiêu; là một trong những cách chế biến trứng tốt nhất trong giai đoạn hồi phục.",
    "Soft and effective for stool softening.":
      "Mềm và có hiệu quả rõ trong việc làm phân mềm.",
    "Soft and hydrating; choose less-sweet versions.":
      "Mềm, giàu nước; nên chọn phiên bản ít ngọt.",
    "Soft and hydrating; good for stool.":
      "Mềm, giàu nước; có lợi cho độ mềm của phân.",
    "Soft and hydrating; safer than raw tomatoes.":
      "Mềm và nhiều nước; an toàn hơn so với cà chua sống.",
    "Soft and moist; usually well tolerated.":
      "Mềm, ẩm; thường được cơ thể dung nạp tốt.",
    "Soft and water-rich when cooked; very gentle.":
      "Khi nấu chín thì mềm và nhiều nước; rất dịu cho đường ruột.",
    "Soft but raw; avoid if your doctor advises against raw foods during recovery.":
      "Mềm nhưng là đồ sống; nên tránh nếu bác sĩ khuyên kiêng thức ăn sống trong giai đoạn hồi phục.",
    "Soft but stringy; chew well to prevent tangling in stool.":
      "Mềm nhưng dạng sợi; cần nhai kỹ để tránh vón lại trong phân.",
    "Soft fish protein is gentle; avoid pairing with rice for best effect.":
      "Đạm từ cá mềm và nhẹ nhàng; để tối ưu nên hạn chế ăn kèm nhiều cơm trắng.",
    "Soft oily fish; useful in small portions.":
      "Cá béo mềm; hữu ích nếu ăn với khẩu phần nhỏ.",
    "Soft steamed sheets and minced meat are gentle; limit fried shallots and sauce.":
      "Bánh tráng hấp mềm và thịt bằm khá dịu; nên bớt hành phi và nước mắm nếu có.",
    "Soft textured greens that support stool softness.":
      "Rau lá mềm giúp hỗ trợ làm phân mềm.",
    "Soft when cooked but can create gas; moderate portions.":
      "Khi nấu chín thì mềm nhưng có thể gây đầy hơi; nên ăn lượng vừa phải.",
    "Soft when cooked but slightly rough; moderate portions.":
      "Khi nấu chín thì mềm nhưng hơi ráp; nên ăn vừa phải.",
    "Soft when cooked; mild on digestion.":
      "Khi nấu chín thì mềm và khá nhẹ nhàng cho tiêu hóa.",
    "Soft when cooked; rough when raw, so always cook well.":
      "Khi nấu chín thì mềm nhưng ăn sống khá ráp; nên nấu chín kỹ trước khi ăn.",
    "Soft white fish; easy to digest and gentle on stool.":
      "Cá thịt trắng mềm; dễ tiêu hóa và khá dịu đối với phân.",
    "Soft white meat; generally gentle if not too heavily seasoned.":
      "Thịt trắng mềm nhìn chung khá dịu nếu không nêm nếm quá đậm.",
    "Softer cut with more fat; fine in small portions if cooked tender.":
      "Phần thịt mềm hơn, có nhiều mỡ; chấp nhận được nếu ăn lượng nhỏ và nấu cho thật mềm.",
    "Softer nut; oils help but still adds stool bulk.":
      "Loại hạt mềm hơn, dầu giúp bôi trơn một chút nhưng vẫn làm phân to hơn.",
    "Sorbitol helps soften stool; effective in small portions.":
      "Sorbitol giúp làm mềm phân; hiệu quả khi dùng khẩu phần nhỏ.",
    "Sticky when digested and increases stool firmness.":
      "Khi tiêu hóa trở nên dính, làm phân chắc và khó đi hơn.",
    "Still very low in fibre and high in sodium; may dry and firm the stool unless balanced with a lot of broth and vegetables.":
      "Vẫn rất ít chất xơ nhưng nhiều muối; có thể làm phân khô và cứng nếu không ăn kèm nhiều canh và rau.",
    "Stimulates bowel movement but dries stool; may worsen pain.":
      "Kích thích đi tiêu nhưng làm phân khô hơn; có thể khiến cơn đau khi đi ngoài nặng hơn.",
    "Strong FODMAP; causes bloating and discomfort.":
      "Chứa nhiều FODMAP; dễ gây chướng bụng và khó chịu.",
    "Strong flavour but soft texture; acceptable in small portions if tolerated.":
      "Mùi vị đậm nhưng kết cấu mềm; dùng được với khẩu phần nhỏ nếu cơ thể chịu được.",
    "Sugar and dairy can constipate; forms sticky stool.":
      "Đường và sữa có thể gây táo bón; tạo phân dính.",
    "Sweet potato noodles are sticky and heavy; may produce dense stool.":
      "Miến khoai lang/cọng miến tinh bột khá dính và nặng; có thể tạo phân đặc.",
    "Sweet roasted pork; can be dry and sticky, so limit during recovery.":
      "Thịt heo quay/ram ngọt có thể khô và dính; nên hạn chế trong giai đoạn hồi phục.",
    "Tapioca pearls create very sticky stool; strongly constipating.":
      "Trân châu từ bột năng tạo phân rất dính; dễ gây táo bón.",
    "Thick yellow wheat noodles; low in fibre and often oily, which may promote firm, sticky stools.":
      "Mì vàng sợi to làm từ bột mì ít chất xơ và thường nhiều dầu; dễ làm phân chắc và dính.",
    "Tough red meat; can be hard to digest and may worsen pain when passing stool.":
      "Thịt đỏ dai; khó tiêu và có thể làm cơn đau lúc đi ngoài nặng hơn.",
    "Tough skins and high insoluble fiber; avoid early on.":
      "Vỏ dày, dai và nhiều chất xơ không hòa tan; nên tránh trong giai đoạn đầu hồi phục.",
    "Unripe banana firms stool; avoid.":
      "Chuối xanh làm phân chắc và cứng hơn; nên tránh.",
    "Very chewy and harder to digest; best avoided soon after surgery.":
      "Rất dai và khó tiêu; tốt nhất nên tránh trong giai đoạn sớm sau phẫu thuật.",
    "Very fatty; may lubricate stool but can cause discomfort if eaten in large amounts.":
      "Rất nhiều mỡ; có thể bôi trơn phân nhưng ăn nhiều dễ gây đầy bụng và khó chịu.",
    "Very gentle leafy vegetable; softens stool effectively.":
      "Rau lá rất mềm và dịu; hỗ trợ làm phân mềm khá hiệu quả.",
    "Very high water but little stool-softening fiber.":
      "Hàm lượng nước rất cao nhưng ít chất xơ giúp làm mềm phân.",
    "Very hydrating; excellent for soft stool.":
      "Rất giàu nước; hỗ trợ làm phân mềm rất tốt.",
    "Very soft and gentle; excellent protein option after surgery.":
      "Rất mềm và nhẹ nhàng; là nguồn đạm tuyệt vời sau phẫu thuật.",
    "Very soft rice sheets digest easily; suitable in small portions.":
      "Bánh tráng/bánh ướt rất mềm, dễ tiêu; phù hợp ăn lượng nhỏ.",
    "Very sugary and sticky; increases stool firmness.":
      "Rất nhiều đường và dính; làm phân chắc và khó đi hơn.",
    "Vietnamese white baguette; refined flour with a dry crumb that can absorb water and contribute to harder stools.":
      "Bánh mì Việt Nam làm từ bột trắng tinh luyện, ruột khô dễ hút nước trong ruột và khiến phân cứng hơn.",
    "Warm broth is hydrating and gentle; ideal as a side dish.":
      "Nước dùng ấm giúp bổ sung nước và rất dịu cho đường ruột; rất phù hợp làm món ăn kèm.",
    "Water-rich and soft when cooked; gentle on digestion.":
      "Khi nấu chín thì mềm và nhiều nước; khá nhẹ nhàng với tiêu hóa.",
    "When soaked, chia forms a gel that softens and lubricates stool; must be taken with plenty of water to avoid blockage.":
      "Khi ngâm, hạt chia tạo lớp gel giúp làm mềm và bôi trơn phân; bắt buộc phải uống kèm nhiều nước để tránh tắc nghẽn.",
    "When well-boiled in soups or stews, taro is fairly soft but starchy; keep portions small and avoid crispy taro snacks.":
      "Khi nấu kỹ trong canh hoặc món hầm, khoai môn khá mềm nhưng vẫn nhiều tinh bột; nên ăn lượng nhỏ và tránh các món khoai môn chiên giòn.",
    "Whole grain with both fibre types; can support softer stools but increases volume—better once acute pain has settled.":
      "Ngũ cốc nguyên hạt có cả hai dạng chất xơ; có thể giúp phân mềm hơn nhưng cũng làm tăng thể tích phân — phù hợp hơn khi giai đoạn đau cấp tính đã qua.",
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
