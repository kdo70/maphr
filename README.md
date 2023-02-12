# Lineage 2 interlude Maphr - web for acis source

<details>
    <summary>Инициализация проекта</summary>

Скопировать .env

```shell
cp .env.example .env
```

Собрать контейнеры приложения

```shell
sudo docker-compose up -d --build 
```

Установить зависимости
```shell
docker exec -it app composer install
```

Выдать права на хранилище

```shell
sudo chmod 777 -R storage && sudo chmod 777 -R bootstrap/cache
```

Сгенерировать ключ

```shell
docker exec -it app php artisan key:generate
```

Создать символьные ссылки

```shell
docker exec -it app php artisan storage:link
```

Выполнить миграции

```shell
docker exec -it app php artisan migrate
```

Перезапутить контейнер app
```shell
docker restart app
```

- Приложение доступно по адресу: http://localhost
- Мониторинг очередей: http://localhost/horizon
- Adminer: http://localhost:8080

</details>

npm run dev -- --host
