<script lang="ts">
	type TReaction = {
		id: string;
		emoji: string;
		count: number;
	};
	type TChat = {
		id: string;
		title: string;
		content: string;
		reactions: TReaction[];
	};
	type TSnippet = {
		index: number;
	};
	type TOnClickReaction = {
		chatIndex: number;
		reactIndex: number;
	};
	const MAX_REACTION_COUNT = 10;
	let reactionCount = $state(0);
	let visibleReact = $derived(reactionCount <= MAX_REACTION_COUNT);
	let chats = $state<TChat[]>([
		{
			id: '453452341',
			title: 'Hello everyone,',
			content: `Thank you for the workshop, it was very productive meeting. I can't wait to start working on
			this new project with you guys. But first things first, I'am waiting for the offer and pitch
			deck from you. It would be great to get it by the end o the month.`,
			reactions: [
				{ id: '1', emoji: '👍', count: 28 },
				{ id: '2', emoji: '😍', count: 16 },
				{ id: '3', emoji: '😮', count: 11 },
				{ id: '3', emoji: '👻', count: 0 }
			]
		},
		{
			id: '242345',
			title: 'Thank guys!',
			content: `Ok @team I'am attaching our offer and pitch deck. Take your time to review everything. I'am looking forward to the next steps! Thank you.
                Looking forward to it! Thanks.`,
			reactions: [
				{ id: '1', emoji: '👍', count: 20 },
				{ id: '2', emoji: '😍', count: 10 },
				{ id: '3', emoji: '😮', count: 2 },
				{ id: '3', emoji: '👻', count: 1 }
			]
		}
	]);
	let newChat = $state<Pick<TChat, 'title' | 'content'>>({ title: '', content: '' });

	$effect(() => {
		!visibleReact && alert(`you can't react more 10 times`);
	});

	const onClickReaction = ({ chatIndex, reactIndex }: TOnClickReaction) => {
		reactionCount++;
		chats[chatIndex].reactions[reactIndex].count++;
	};

	const onSubmitNewChat = (event: SubmitEvent) => {
		event.preventDefault();
		const chat = {
			id: Date.now().toString(),
			...newChat,
			reactions: [
				{ id: '1', emoji: '👍', count: 0 },
				{ id: '2', emoji: '😍', count: 0 },
				{ id: '3', emoji: '😮', count: 0 },
				{ id: '3', emoji: '👻', count: 0 }
			]
		};
		chats.push(chat);
        
		// reset
		newChat = { title: '', content: '' };
	};
</script>

<div
	class="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 xl:mb-0 dark:border-gray-700 dark:bg-gray-800"
>
	<div class="mb-4 flex items-center justify-between">
		<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Smart chat</h3>
		<a
			href="#"
			class="text-primary-700 dark:text-primary-500 inline-flex items-center rounded-lg p-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
		>
			View all
		</a>
	</div>
	<!-- Chat -->
	<div class="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit">
		{#each chats as chat, index}
			{@render Chat({ ...chat, index })}
		{/each}

		{@render FormChat()}
	</div>
</div>

{#snippet FormChat()}
	<form
		class="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700"
		onsubmit={onSubmitNewChat}
	>
		<textarea
			id="chat"
			rows="1"
			class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-3 mr-4 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
			placeholder="title"
			bind:value={newChat.title}
			required
			minlength="8"
		></textarea>
		<div class="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
			<label for="comment" class="sr-only">Write your message</label>
			<textarea
				id="comment"
				rows="8"
				class="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
				placeholder="Write your message"
				style="height: 168px;"
				bind:value={newChat.content}
				required
				minlength="8"
			></textarea>
		</div>
		<div class="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
			<button
				type="submit"
				class="bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 inline-flex items-center rounded-lg px-4 py-2.5 text-center text-xs font-medium text-white focus:ring-4"
			>
				Send message
			</button>
			<div class="flex space-x-1 pl-0 sm:pl-2">
				<button
					type="button"
					class="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
				>
					<svg
						aria-hidden="true"
						class="h-5 w-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
							clip-rule="evenodd"
						></path></svg
					>
					<span class="sr-only">Attach file</span>
				</button>
				<button
					type="button"
					class="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
				>
					<svg
						aria-hidden="true"
						class="h-5 w-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
							clip-rule="evenodd"
						></path></svg
					>
					<span class="sr-only">Set location</span>
				</button>
				<button
					type="button"
					class="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
				>
					<svg
						aria-hidden="true"
						class="h-5 w-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
							clip-rule="evenodd"
						></path></svg
					>
					<span class="sr-only">Upload image</span>
				</button>
			</div>
		</div>
	</form>
{/snippet}

{#snippet Chat({ id, title, content, reactions, index: chatIndex }: TChat & TSnippet)}
	<article class="mb-5" {id}>
		<footer class="mb-2 flex items-center justify-between">
			<div class="flex items-center">
				<p
					class="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white"
				>
					<img
						class="mr-2 h-6 w-6 rounded-full"
						src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
						alt="Bonnie avatar"
					/>Bonnie Green
				</p>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					<time datetime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time>
				</p>
			</div>
			<button
				id="dropdownComment2Button"
				data-dropdown-toggle="dropdownComment2"
				class="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600"
				type="button"
			>
				<svg
					class="h-5 w-5"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
					>
					</path>
				</svg>
				<span class="sr-only">Comment settings</span>
			</button>
			<!-- Dropdown menu -->
			<div
				id="dropdownComment2"
				class="z-10 hidden w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
				data-popper-placement="bottom"
				style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1029px, 1262px);"
			>
				<ul
					class="py-1 text-sm text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdownMenuIconHorizontalButton"
				>
					<li>
						<a
							href="#"
							class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>Edit</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>Remove</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>Report</a
						>
					</li>
				</ul>
			</div>
		</footer>
		<p class="mb-3 text-gray-900 dark:text-white">{title}</p>
		<p class="mb-2 text-gray-900 dark:text-white">
			{content}
		</p>
		<p class="mb-3 text-gray-900 dark:text-white">Cheers!</p>
		<div class="mb-2 flex items-center space-x-2">
			{#each reactions as reaction, index}
				{@render Reaction({ ...reaction, index, chatIndex })}
			{/each}
		</div>
	</article>
{/snippet}

{#snippet Reaction({
	id,
	emoji,
	count,
	index,
	chatIndex
}: TReaction & TSnippet & { chatIndex: number })}
	<button
		{id}
		type="button"
		disabled={!visibleReact}
		class="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
		onclick={() => onClickReaction({ chatIndex, reactIndex: index })}
	>
		{emoji}
		<span class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{count}</span>
	</button>
{/snippet}

<style>
	.bg-primary-700 {
		--tw-bg-opacity: 1;
		background-color: rgb(29 78 216 / var(--tw-bg-opacity));
	}
</style>
