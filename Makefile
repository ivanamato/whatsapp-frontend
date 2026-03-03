.PHONY: install dev build preview lint typecheck clean release-minor release-major

install: ## Install dependencies
	npm install

dev: ## Start dev server (reads VITE_API_URL, VITE_API_KEY, VITE_INSTANCE from .env)
	npm run dev

build: ## Build library (ES + UMD + CSS + .d.ts) → dist/
	npm run build

preview: ## Serve the built library locally for testing
	npm run preview

lint: ## Run ESLint
	npm run lint

typecheck: ## Run TypeScript type check
	npm run typecheck

clean: ## Remove build artifacts and node_modules
	rm -rf dist node_modules

release-minor: ## Bump minor version, push, and create GitHub release
	npm version minor
	git push origin master --tags
	gh release create $$(git describe --tags --abbrev=0) --generate-notes

release-major: ## Bump major version, push, and create GitHub release
	npm version major
	git push origin master --tags
	gh release create $$(git describe --tags --abbrev=0) --generate-notes

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
