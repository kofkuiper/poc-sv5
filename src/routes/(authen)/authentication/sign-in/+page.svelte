<div
	class="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 pt-8 md:h-screen dark:bg-gray-900"
>
	<a
		href="https://flowbite-admin-dashboard.vercel.app/"
		class="mb-8 flex items-center justify-center text-2xl font-semibold lg:mb-10 dark:text-white"
	>
		<img
			src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg"
			class="mr-4 h-11"
			alt="FlowBite Logo"
		/>
		<span>Flowbite</span>
	</a>
	<!-- Card -->
	<div class="w-full max-w-xl space-y-8 rounded-lg bg-white p-6 shadow sm:p-8 dark:bg-gray-800">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-white">Sign in to platform</h2>
		<form class="mt-8 space-y-6" action="#">
			<div>
				<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
					>Your email</label
				>
				<input
					type="email"
					name="email"
					id="email"
					class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
					placeholder="name@company.com"
				/>
			</div>
			<div>
				<label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
					>Your password</label
				>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="••••••••"
					class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
				/>
			</div>
			<div class="flex items-start">
				<div class="flex h-5 items-center">
					<input
						id="remember"
						aria-describedby="remember"
						name="remember"
						type="checkbox"
						class="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
					/>
				</div>
				<div class="ml-3 text-sm">
					<label for="remember" class="font-medium text-gray-900 dark:text-white">Remember me</label
					>
				</div>
				<a href="#" class="text-primary-700 dark:text-primary-500 ml-auto text-sm hover:underline"
					>Lost Password?</a
				>
			</div>
			<button
				type="submit"
				class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4 sm:w-auto"
				>Login to your account</button
			>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
				Not registered? <a class="text-primary-700 dark:text-primary-500 hover:underline"
					>Create account</a
				>
			</div>
		</form>
	</div>
</div>

<style>
	.bg-primary-700 {
		background-color: rgb(29 78 216 / var(--tw-bg-opacity));
	}
</style>
