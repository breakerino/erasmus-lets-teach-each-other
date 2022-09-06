export const navigationHandler = {
  sections: null,
  navBar: null,
  navItems: null,
  activeNavItem: null,
  isAnimating: false,
  observer: null,
  observerOptions: {
    root: null,
    threshold: 0.5,
    rootMargin: `0px 0px 0px 0px`,
  },

  currentSectionCheck(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !this.isAnimating) {
        this.activeNavItem = entry.target.dataset.id;
        this.setActiveItem();
      }
    });
  },

  setActiveItem() {
    if (!this.activeNavItem) return;
    const activeItem = this.navBar.querySelector(
      `a:nth-child(${this.activeNavItem})`
    );

    if (this.navBar.querySelector("a.active")) {
      this.navBar.querySelector("a.active").classList.remove("active");
    }

    activeItem?.classList.add("active");

    document.documentElement.style.setProperty(
      "--active-indicator-pos",
      `${activeItem?.offsetLeft + 10}px`
    );
    document.documentElement.style.setProperty(
      "--active-indicator-width",
      `${activeItem?.querySelector("span").offsetWidth}px`
    );
  },

  init(sections, navBar) {
    this.sections = sections;
    this.navBar = navBar;
    this.navItems = navBar.querySelectorAll("a");

    this.observer = new IntersectionObserver(
      (entries) => this.currentSectionCheck(entries),
      this.observerOptions
    );

    this.navItems.forEach((navItem, index) => {
      navItem.addEventListener("click", () => {
        if (this.activeNavItem == index) return;

        this.isAnimating = true;
        this.activeNavItem = index;
        this.navBar.style.pointerEvents = "none";

        this.setActiveItem();

        setTimeout(() => {
          this.navBar.style.pointerEvents = "auto";
          this.isAnimating = false;
        }, 500);
      });
    });

    this.sections.forEach((section) => this.observer.observe(section));
  },
};

export const initializeMobileMenu = () => {
	const navToggleButton = document.querySelector('[data-menu-toggler]');
	const navCloseButton = document.querySelector('[data-menu-close]');
	const navWrapper = document.querySelector('[data-menu-wrapper]');
	const mainContent: HTMLElement = document.querySelector('.site-wrapper > main');
	
	const handleOpen = () => {
		navWrapper.classList.toggle('is-opened');
		mainContent.style.pointerEvents = 'none';
		document.body.style.overflow = 'hidden';
		//document.body.style.paddingRight = '15px';
	}
	
	const handleClose = () => {
		navWrapper.classList.remove('is-opened');
		mainContent.style.pointerEvents = 'all'
		document.body.style.overflow = 'visible';
		//document.body.style.paddingRight = '0';
	}
	
	navToggleButton.addEventListener('click', handleOpen);
	navWrapper.querySelectorAll('a').forEach(navItem => navItem.addEventListener('click', handleClose));
	navCloseButton.addEventListener('click', handleClose);
}
navigationHandler.init(
document.querySelectorAll("main>section"),
document.querySelector("nav")
);