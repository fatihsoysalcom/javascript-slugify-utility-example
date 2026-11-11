/**
 * A simple utility function to convert a string into a URL-friendly slug.
 * This kind of reusable function is often published as an NPM package
 * to help developers automate repetitive tasks and speed up development.
 *
 * @param {string} text - The input string.
 * @returns {string} The slugified string.
 */
function slugify(text) {
  // Convert to lowercase
  let slug = text.toString().toLowerCase();

  // Remove leading/trailing whitespace
  slug = slug.trim();

  // Replace Turkish specific characters with their English equivalents
  slug = slug.replace(/ç/g, 'c')
             .replace(/ğ/g, 'g')
             .replace(/ı/g, 'i')
             .replace(/ö/g, 'o')
             .replace(/ş/g, 's')
             .replace(/ü/g, 'u');

  // Replace spaces with hyphens
  slug = slug.replace(/\s+/g, '-');

  // Remove special characters (keep only alphanumeric and hyphens)
  slug = slug.replace(/[^\w-]+/g, '');

  // Replace multiple hyphens with a single hyphen
  slug = slug.replace(/--+/g, '-');

  // Remove hyphens from start and end
  slug = slug.replace(/^-+/, '').replace(/-+$/, '');

  return slug;
}

// --- Demonstration of the utility function ---

console.log("--- Slugify Utility Demonstration ---");

const titles = [
  "5 NPM Paketini 10.000 İndirmeye Ulaştırmak: Bir Başarı Hikayesi",
  "Merhaba Dünya! Bu bir test başlığıdır.",
  "  A great article title with spaces and special chars!  ",
  "Another example - with a dash",
  "Türkçe Karakterler: Çığır Açan Bir Makale Örneği"
];

titles.forEach((title, index) => {
  const slug = slugify(title);
  console.log(`\nOriginal Title ${index + 1}: "${title}"`);
  console.log(`Slugified Title ${index + 1}: "${slug}"`);
  // This demonstrates how a simple, reusable function (like an NPM package)
  // can automate a common task, saving developers time and effort.
});

console.log("\nThis utility function, if published as an NPM package,");
console.log("would allow developers to easily integrate slug generation");
console.log("into their projects without writing the code from scratch,");
console.log("embodying the core value proposition of NPM packages: ");
console.log("automating repetitive tasks and speeding up development.");
