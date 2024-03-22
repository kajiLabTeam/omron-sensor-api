include .env

# Dockerコンテナを閉じる
down:
	docker compose down

# Dockerコンテナを立ち上げる・ログを表示
dev:
	docker compose up -d
	docker compose logs app -f

# ログを表示
log:
	docker compose logs app -f

# MySQLに接続
mysql:
	docker exec -it mysql mysql -u $(MYSQL_USER) --password=$(MYSQL_ROOT_PASSWORD)

# APIコンテナに入る
app:
	docker exec -it api bash

# Prisma Studioを立ち上げる
db_web:
	docker exec -it api npx prisma studio