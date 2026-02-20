#!/bin/bash

# Проверка аргумента
if [ -z "$1" ]; then
  echo "Укажите версию, например: ./remove-version.sh 1.0.0"
  exit 1
fi

VER=$1
echo "Удаление версии $VER..."

# Удаление базовых файлов
rm -rf "versioned_docs/version-$VER"
rm -f "versioned_sidebars/version-$VER-sidebars.json"

# Удаление локализации (RU)
rm -rf "i18n/ru/docusaurus-plugin-content-docs/version-$VER"
rm -f "i18n/ru/docusaurus-plugin-content-docs/version-$VER-sidebars.json"

# Сброс кэша Docusaurus
npm run clear

echo "Готово. Не забудьте обновить versions.json!"