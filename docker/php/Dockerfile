FROM php:8.2-fpm

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

RUN apt-get update && apt-get install -y \
    htop \
    nano \
    systemctl \
    curl \
    git \
    wget \
    libpq-dev \
	libonig-dev \
	libxml2-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libgd-dev \
    libwebp-dev \
    jpegoptim \
    optipng \
    pngquant \
    gifsicle \
	supervisor \
	libicu-dev \
    zlib1g-dev \
    libzip-dev \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-webp --with-jpeg \
    && docker-php-ext-configure pcntl --enable-pcntl \
    && docker-php-ext-configure soap \
    && docker-php-ext-configure intl \
    && docker-php-ext-install gd \
    && docker-php-ext-install exif \
    && docker-php-ext-install pcntl \
    && docker-php-ext-install pdo \
    && docker-php-ext-install pdo_pgsql \
    && docker-php-ext-install intl \
    && docker-php-ext-install soap

RUN mkdir -p /usr/src/php/ext/redis \
    && curl -L https://github.com/phpredis/phpredis/archive/5.3.4.tar.gz | tar xvz -C /usr/src/php/ext/redis --strip 1 \
    && echo 'redis' >> /usr/src/php-available-exts \
    && docker-php-ext-install redis

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash \
    && apt -y install nodejs

CMD ["/usr/bin/supervisord"]
