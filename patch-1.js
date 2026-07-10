const fs = require('fs');
let code = fs.readFileSync('src/components/Pricing.tsx', 'utf8');

// 1. Add hasScrolled state
code = code.replace(
  "const [lastRecommendedIndex, setLastRecommendedIndex] = useState<number | null>(null);",
  "const [lastRecommendedIndex, setLastRecommendedIndex] = useState<number | null>(null);\n  const [hasScrolled, setHasScrolled] = useState(false);"
);

// 2. Modify useEffect for scroll
code = code.replace(
  "if (plansContainerRef.current) {",
  "if (!hasScrolled && plansContainerRef.current) {\n        setHasScrolled(true);"
);

// 3. Update getDynamicRecommendationCopy
code = code.replace(
  "const getDynamicRecommendationCopy = (vol: number) => {",
  "const getDynamicSubtitle = (vol: number | string) => {\n    if (vol === '') return \"Choose the closest option. You can fine-tune the number afterwards.\";\n    const v = typeof vol === 'string' ? parseInt(vol, 10) : vol;\n    if (v >= 50) return \"For high-volume publishing, scale with reliable premium production.\";\n    if (v >= 40) return \"For scaling production, build an ongoing growth engine.\";\n    if (v >= 30) return \"For accelerating growth, maximize your audience reach.\";\n    if (v >= 20) return \"For consistent publishing, maintain your rhythm while lowering costs.\";\n    if (v >= 10) return \"For growing creators, establish a reliable publishing rhythm.\";\n    return \"For starting consistently, begin building your content pipeline.\";\n  };\n\n  const getDynamicRecommendationCopy = (vol: number) => {"
);
code = code.replace(
  `  const getDynamicRecommendationCopy = (vol: number) => {
    if (vol >= 50) return "Maximum publishing consistency with the highest available savings.";
    if (vol >= 40) return "Built for businesses using content as a long-term growth engine.";
    if (vol >= 30) return "An ideal publishing volume for creators serious about scaling.";
    if (vol >= 20) return "A balanced monthly workflow for sustainable audience growth.";
    if (vol >= 10) return "A reliable publishing rhythm for growing creators.";
    return "You're getting started with consistent content.";
  };`,
  `  const getDynamicRecommendationCopy = (vol: number) => {
    if (vol >= 30) return "Matches Your Selected Volume";
    if (vol >= 10) return "Matches Your Selected Volume";
    return "Suggested Starting Point";
  };`
);

// 4. Update the subtitle
code = code.replace(
  `<p className="text-brand-text-muted text-lg mb-10">
            Choose the closest option. You can fine-tune the number afterwards.
          </p>`,
  `<p className="text-brand-text-muted text-lg mb-10 transition-all duration-300">
            {getDynamicSubtitle(volume)}
          </p>`
);

// 5. Update "We'll automatically recommend the best package"
code = code.replace(
  "We'll automatically recommend the best package.",
  "We'll suggest a starting package matched to your volume."
);

fs.writeFileSync('src/components/Pricing.tsx', code);
