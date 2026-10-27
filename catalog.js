const icon = (name, classes = 'h-5 w-5') => `<i data-lucide="${name}" class="${classes}" aria-hidden="true"></i>`;
const refreshIcons = () => window.lucide?.createIcons();

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="bg-forest px-4 py-2 text-center text-[10px] tracking-[0.08em] text-white">Thoughtfully made. Naturally you.</div>
      <header class="border-b border-dark-green/30">
        <div class="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <a href="catalog.html" aria-label="FORM home" class="text-3xl font-semibold tracking-[0.12em]">FORM<span class="text-forest">.</span></a>
          <nav aria-label="Main navigation" class="order-3 flex w-full justify-center gap-7 text-xs sm:order-none sm:w-auto">
            <a href="#catalog" data-category="all" class="border-b border-forest pb-1 font-semibold text-forest">The collection</a>
            <a href="#catalog" data-category="Tops" class="pb-1 text-dark-green hover:text-sea">Tops</a>
            <a href="#catalog" data-category="Bottoms" class="pb-1 text-dark-green hover:text-sea">Bottoms</a>
            <a href="#catalog" data-category="Knitwear" class="pb-1 text-dark-green hover:text-sea">Knitwear</a>
          </nav>
          <a href="#footer" class="flex items-center gap-2 text-xs hover:text-forest">Get in touch ${icon('arrow-up-right', 'h-4 w-4')}</a>
        </div>
      </header>`;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="footer" class="border-t border-sand/50 bg-dark-green text-sand">
        <div class="mx-auto grid max-w-[1440px] gap-9 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-[2fr_1fr_1fr] lg:px-12">
          <div><a href="catalog.html" aria-label="FORM home" class="text-3xl font-semibold tracking-[0.12em]">FORM<span class="text-sea">.</span></a><p class="mt-4 max-w-xs text-sm leading-6 text-sand/80">Considered clothing for the everyday.<br>Made to be worn, loved, and lived in.</p></div>
          <nav aria-label="Shop"><h2 class="mb-4 text-xs font-semibold">Explore</h2><ul class="space-y-3 text-xs text-sand/80"><li><a href="#catalog" data-category="all" class="hover:text-white">All pieces</a></li><li><a href="#catalog" data-category="Outerwear" class="hover:text-white">Outerwear</a></li><li><a href="#catalog" data-category="Dresses" class="hover:text-white">Dresses</a></li></ul></nav>
          <div><h2 class="mb-4 text-xs font-semibold">Let's talk</h2><a href="mailto:hello@form.example" class="text-xs text-sand/80 underline underline-offset-4">hello@form.example</a><p class="mt-3 text-xs text-sand/80">Monday to Friday, 9am to 5pm</p></div>
        </div>
        <div class="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-3 border-t border-sand/30 px-5 py-5 text-[10px] text-sand/80 sm:px-8 lg:px-12"><p>&copy; ${new Date().getFullYear()} FORM. All rights reserved.</p><p>Less, but better.</p></div>
      </footer>`;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);

const products = [
  { name: 'The Everyday Tee', category: 'Tops', price: 28, color: 'Chalk', image: '1521572163474-6864f9cf17ab', sizes: ['XS', 'S', 'M', 'L', 'XL'], badge: 'BESTSELLER' },
  { name: 'Relaxed Cotton Shirt', category: 'Tops', price: 64, color: 'Soft blue', image: '1596755094514-f87e34085b2c', sizes: ['S', 'M', 'L', 'XL'] },
  { name: 'The Straight Jean', category: 'Bottoms', price: 88, color: 'Washed indigo', image: '1542272604-787c3835535d', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { name: 'Weekend Knit', category: 'Knitwear', price: 96, color: 'Oat', image: '1434389677669-e08b4cac3105', sizes: ['S', 'M', 'L'], badge: 'NEW' },
  { name: 'Linen Button-Down', category: 'Tops', price: 72, color: 'White', image: '1598554747436-c9293d6a588f', sizes: ['XS', 'S', 'M', 'L'] },
  { name: 'Everyday Chino', category: 'Bottoms', price: 78, color: 'Stone', image: '1473966968600-fa801b869a1a', sizes: ['S', 'M', 'L', 'XL'] },
  { name: 'The Field Jacket', category: 'Outerwear', price: 148, color: 'Olive', image: '1544923246-77307dd654cb', sizes: ['XS', 'S', 'M', 'L', 'XL'], badge: 'NEW' },
  { name: 'The Midi Dress', category: 'Dresses', price: 110, color: 'Terracotta', image: '1515372039744-b8f02a3ae446', sizes: ['XS', 'S', 'M', 'L'] },
  { name: 'Essential Crewneck', category: 'Knitwear', price: 84, color: 'Fog', image: '1576566588028-4147f3842f27', sizes: ['S', 'M', 'L', 'XL'] },
  { name: 'Ribbed Cotton Tank', category: 'Tops', price: 32, color: 'Ink', image: '1503342217505-b0a15ec3261c', sizes: ['XS', 'S', 'M', 'L'] },
  { name: 'Wide-Leg Trouser', category: 'Bottoms', price: 92, color: 'Black', image: '1594633312681-425c7b97ccd1', sizes: ['XS', 'S', 'M', 'L', 'XL'], badge: 'BESTSELLER' },
  { name: 'The Denim Jacket', category: 'Outerwear', price: 128, color: 'Classic blue', image: '1543076447-215ad9ba6923', sizes: ['S', 'M', 'L', 'XL'] },
  { name: 'Soft Cotton Cardigan', category: 'Knitwear', price: 98, color: 'Cream', image: '1620799140408-edc6dcb6d633', sizes: ['XS', 'S', 'M', 'L'] },
  { name: 'The Oxford Shirt', category: 'Tops', price: 76, color: 'Cloud', image: '1602810318383-e386cc2a3ccf', sizes: ['S', 'M', 'L', 'XL'] },
  { name: 'The Summer Dress', category: 'Dresses', price: 104, color: 'Botanical', image: '1496747611176-843222e1e57c', sizes: ['XS', 'S', 'M'], badge: 'NEW' },
  { name: 'Relaxed Denim', category: 'Bottoms', price: 92, color: 'Light wash', image: '1541099649105-f69ad21f3246', sizes: ['XS', 'S', 'M', 'L'] },
  { name: 'The Heavyweight Tee', category: 'Tops', price: 38, color: 'Forest', image: '1503341504253-dff4815485f1', sizes: ['S', 'M', 'L', 'XL'] },
  { name: 'The Everyday Blazer', category: 'Outerwear', price: 164, color: 'Charcoal', image: '1591047139829-d91aecb6caea', sizes: ['XS', 'S', 'M', 'L'] },
  { name: 'Fine Knit Pullover', category: 'Knitwear', price: 108, color: 'Moss', image: '1551028719-00167b16eac5', sizes: ['S', 'M', 'L', 'XL'] },
  { name: 'The Slip Dress', category: 'Dresses', price: 118, color: 'Rose', image: '1595777457583-95e059d581b8', sizes: ['XS', 'S', 'M', 'L'] },
].map((product, index) => ({ ...product, id: index + 1 }));

const imageUrl = (product, width = 640) => `https://images.unsplash.com/photo-${product.image}?auto=format&fit=crop&w=${width}&q=85`;
const money = (price) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
const filters = document.querySelector('#filters');
const category = document.querySelector('#category');
const size = document.querySelector('#size');
const sort = document.querySelector('#sort');
const favorites = new Set();

function renderProducts() {
  const visible = products.filter((product) => (category.value === 'all' || product.category === category.value) && (size.value === 'all' || product.sizes.includes(size.value)));
  if (sort.value === 'low') visible.sort((first, second) => first.price - second.price);
  if (sort.value === 'high') visible.sort((first, second) => second.price - first.price);
  if (sort.value === 'name') visible.sort((first, second) => first.name.localeCompare(second.name));
  document.querySelector('#products').innerHTML = visible.map((product, index) => `
    <li class="min-w-0">
      <article aria-labelledby="product-${product.id}">
        <div class="group relative aspect-[4/5] overflow-hidden bg-sand">
          <button type="button" data-product="${product.id}" aria-label="View ${product.name}" class="block h-full w-full">
            <img src="${imageUrl(product)}" alt="${product.name} in ${product.color}" width="640" height="800" ${index < 4 ? 'fetchpriority="high"' : 'loading="lazy"'} class="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105">
          </button>
          ${product.badge ? `<span class="absolute left-2 top-2 bg-sand px-2 py-1.5 text-[8px] font-semibold tracking-[0.08em] sm:left-3 sm:top-3 sm:text-[9px] ${product.badge === 'NEW' ? 'text-forest' : 'text-dark-green'}">${product.badge}</span>` : ''}
          <button type="button" data-favorite="${product.id}" aria-label="Save ${product.name}" aria-pressed="${favorites.has(product.id)}" title="Save ${product.name}" class="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-sand ${favorites.has(product.id) ? 'text-red-600' : 'text-dark-green'} hover:text-red-600">${icon('heart', 'h-4 w-4')}</button>
        </div>
        <div class="mt-3 flex flex-wrap items-start justify-between gap-x-2 gap-y-1"><h2 id="product-${product.id}" class="text-xs font-medium leading-5 sm:text-sm"><button type="button" data-product="${product.id}" class="text-left hover:text-sea">${product.name}</button></h2><p class="text-xs leading-5 text-dark-green sm:text-sm">${money(product.price)}</p></div>
        <p class="mt-1 text-[11px] text-zinc-500">${product.color}</p>
        <p class="mt-2 text-[10px] tracking-[0.1em] text-zinc-400">${product.sizes.join(' / ')}</p>
      </article>
    </li>`).join('');
  document.querySelector('#results-count').textContent = `${visible.length} ${visible.length === 1 ? 'piece' : 'pieces'}`;
  document.querySelector('#bottom-count').textContent = `You've seen all ${visible.length} ${visible.length === 1 ? 'piece' : 'pieces'}`;
  document.querySelector('#empty').hidden = visible.length > 0;
  refreshIcons();
}

filters.addEventListener('submit', (event) => event.preventDefault());
filters.addEventListener('change', renderProducts);
filters.addEventListener('reset', () => requestAnimationFrame(renderProducts));
document.querySelector('#empty-reset').addEventListener('click', () => filters.reset());

const dialog = document.querySelector('#product-dialog');
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  }
});

document.addEventListener('click', (event) => {
  const categoryLink = event.target.closest('[data-category]');
  if (categoryLink) {
    category.value = categoryLink.dataset.category;
    renderProducts();
  }
  const favorite = event.target.closest('[data-favorite]');
  if (favorite) {
    const productId = Number(favorite.dataset.favorite);
    if (favorites.has(productId)) favorites.delete(productId);
    else favorites.add(productId);
    favorite.setAttribute('aria-pressed', favorites.has(productId));
    favorite.classList.toggle('text-red-600', favorites.has(productId));
    favorite.classList.toggle('text-zinc-600', !favorites.has(productId));
    document.querySelector('#announcement').textContent = favorites.has(productId) ? 'Saved to your favorites' : 'Removed from your favorites';
    clearTimeout(window.announcementTimer);
    window.announcementTimer = setTimeout(() => { document.querySelector('#announcement').textContent = ''; }, 2200);
  }
  const productButton = event.target.closest('[data-product]');
  if (productButton) {
    const product = products.find((item) => item.id === Number(productButton.dataset.product));
    document.querySelector('#product-detail').innerHTML = `
      <div class="grid gap-6 sm:grid-cols-2">
        <img src="${imageUrl(product)}" alt="${product.name} in ${product.color}" width="640" height="800" class="aspect-[4/5] w-full object-cover">
        <div><p class="text-xs text-forest">${product.category}</p><h2 id="detail-title" class="mt-3 font-display text-4xl">${product.name}</h2><p class="mt-4 text-lg">${money(product.price)}</p><p class="mt-4 text-sm text-zinc-500">Color: ${product.color}</p><h3 class="mt-6 text-xs font-semibold">Available sizes</h3><ul class="mt-3 flex flex-wrap gap-2">${product.sizes.map((availableSize) => `<li class="border border-zinc-200 px-3 py-2 text-xs">${availableSize}</li>`).join('')}</ul><p class="mt-6 text-xs leading-6 text-zinc-500">Part of the FORM everyday collection.</p></div>
      </div>`;
    dialog.showModal();
  }
});

document.querySelector('#structured-data').textContent = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': '#organization', name: 'FORM' },
    { '@type': 'CollectionPage', name: 'The collection', mainEntity: { '@type': 'ItemList', numberOfItems: products.length, itemListElement: products.map((product, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'Product', name: product.name, image: imageUrl(product), sku: `FORM-${String(product.id).padStart(3, '0')}`, category: product.category, color: product.color, size: product.sizes, brand: { '@type': 'Brand', name: 'FORM' }, offers: { '@type': 'Offer', price: product.price, priceCurrency: 'USD', availability: 'https://schema.org/InStock' } } })) } },
  ],
});

renderProducts();