include .env

down:
	docker compose down

dev:
	docker compose up -d
	docker compose logs app -f

down:
	docker compose down

log:
	docker compose logs app -f

mysql:
	docker exec -it mysql mysql -u $(MYSQL_USER) --password=$(MYSQL_ROOT_PASSWORD)

app:
	docker exec -it api bash

db_web:
	docker exec -it api npx prisma studio