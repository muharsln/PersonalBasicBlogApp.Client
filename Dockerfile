# Angular uygulaması için Node.js ortamı
FROM node:latest AS build

# Çalışma dizinini ayarlayın
WORKDIR /app

# package.json dosyalarını kopyalayın ve bağımlılıkları yükleyin
COPY package*.json ./
RUN npm ci

# Uygulamanın tüm dosyalarını kopyalayın
COPY . .

# Uygulamayı üretim yapılandırması ile derleyin
RUN npm run build --prod

# Nginx için kullanılan son görüntü
FROM nginx:latest

# Nginx yapılandırma dosyasını kopyalayın
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Derlenmiş dosyaları Nginx dizinine kopyalayın
COPY --from=build /app/dist/personal-basic-blog-app.client/browser /usr/share/nginx/html

# Nginx'in dinleyeceği portu açın
EXPOSE 80