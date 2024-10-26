<script lang="ts">
	type Props = {
		token: string | null;
	};

	let { token = $bindable() }: Props = $props();

	function toggleMobileNav() {
		[...document.querySelectorAll('.astronav-toggle')].forEach((el) => {
			el.classList.toggle('hidden');
		});
	}
</script>

<div class="mx-auto max-w-screen-xl px-5">
	<header class="my-5 flex flex-col items-center justify-between lg:flex-row">
		<div class="flex w-full items-center justify-between lg:w-auto">
			<a href="/" class="text-lg"
				><span class="font-bold text-slate-800">Astro</span><span class="text-slate-500">ship</span>
			</a>
			<div class="block lg:hidden">
				<button id="astronav-menu" aria-label="Toggle Menu" onclick={toggleMobileNav}>
					<svg
						fill="currentColor"
						class="h-4 w-4 text-gray-800"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="https://www.w3.org/2000/svg"
					>
						<title>Toggle Menu</title>
						<path
							class="astronav-close-icon astronav-toggle hidden"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
						></path>
						<path
							class="astronav-open-icon astronav-toggle"
							fill-rule="evenodd"
							d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
						></path>
					</svg>
				</button>
			</div>
		</div>
		<nav class="astronav-items astronav-toggle mt-2 hidden w-full lg:mt-0 lg:flex lg:w-auto">
			<ul class="flex flex-col lg:flex-row lg:gap-3">
				<li>
					<a href="/demo" class="flex items-center py-2 text-gray-600 hover:text-gray-900 lg:px-3">
						<span> Runes</span>
					</a>
				</li>
				<li>
					<a href="/products" class="flex items-center py-2 text-gray-600 hover:text-gray-900 lg:px-3">
						<span> Products</span>
					</a>
				</li>
				<li>
					<a href="/blog" class="flex items-center py-2 text-gray-600 hover:text-gray-900 lg:px-3">
						<span> Blog</span>
					</a>
				</li>
				<li>
					<a
						href="/contact"
						class="flex items-center py-2 text-gray-600 hover:text-gray-900 lg:px-3"
					>
						<span> Contact</span>
					</a>
				</li>
				<li>
					<a
						href="https://astroship-pro.web3templates.com/"
						class="flex items-center py-2 text-gray-600 hover:text-gray-900 lg:px-3"
					>
						<span> Pro Version</span>
						<span
							class="ml-1 animate-pulse rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-semibold uppercase text-white"
						>
							New
						</span>
					</a>
				</li>
			</ul>
			<div class="mt-3 flex items-center gap-4 lg:hidden">
				<a
					href="#"
					class="w-full rounded border-2 border-transparent bg-gray-100 px-4 py-2 text-center ring-gray-200 ring-offset-2 transition hover:bg-gray-200 focus-visible:ring-2"
					>Log in
				</a>
				<a
					href="#"
					class="w-full rounded border-2 border-transparent bg-black px-4 py-2 text-center text-white ring-gray-200 ring-offset-2 transition hover:bg-gray-800 focus-visible:ring-2"
					>Sign up
				</a>
			</div>
		</nav>
		<div>
			<div class="hidden items-center gap-4 lg:flex">
				<a href="#">Log in</a>
				<a
					href="#"
					class="rounded border-2 border-transparent bg-black px-4 py-2 text-center text-white ring-gray-200 ring-offset-2 transition hover:bg-gray-800 focus-visible:ring-2"
					>Sign up
				</a>
			</div>
		</div>
	</header>
</div>
