dev:
	docker compose up -d
	docker compose logs app -f

down:
	docker compose down