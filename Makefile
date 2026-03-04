.PHONY: install dev build preview lint typecheck clean

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

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
