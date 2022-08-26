export const initializeTabs = () => {
	const tabButtons = [...document.querySelectorAll('[data-tab-button]')];
	const tabContents = []

	for (const [index, tabButton] of tabButtons.entries()) {
		const activeTabID = tabButton.getAttribute('data-tab-id');
		const activeTabContent = document.querySelector(`[data-tab-content][data-tab-id=${activeTabID}]`)

		tabContents.push(activeTabContent);

		if (index === 0) {
			tabButton.classList.add('active');
		} else {
			activeTabContent.classList.toggle('hidden');
		}

		tabButton.addEventListener('click', (e) => {
			const activeTabButton = document.querySelector(`[data-tab-button].active`)

			if ( activeTabButton === tabButton ) {
				return;
			}

			activeTabButton.classList.remove('active');

			document.querySelectorAll(`[data-tab-content]`).forEach(tabContent => {
				tabContent.classList.add('hidden');
			})

			tabButton.classList.add('active');
			activeTabContent.classList.remove('hidden');
		})
	}
}
