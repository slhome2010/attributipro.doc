#!/bin/bash

if [ -z "$1" ]; then
  echo "Укажите версию, например: bash remove-version.sh 3.0.3"
  exit 1
fi

VER=$1
echo "🚀 Начинаю полное удаление версии $VER..."

# 1. Удаление из versions.json
sed -i "s/\"$VER\",//g; s/,\"$VER\"//g; s/\"$VER\"//g" versions.json

# 2. Удаление файлов базовой версии (EN)
rm -rf "versioned_docs/version-$VER"
rm -f "versioned_sidebars/version-$VER-sidebars.json"

# 3. Удаление файлов локализации (RU)
RU_PATH="i18n/ru/docusaurus-plugin-content-docs"
rm -rf "$RU_PATH/version-$VER"
rm -f "$RU_PATH/version-$VER-sidebars.json"
rm -f "$RU_PATH/version-$VER.json" # Тот самый доп. файл

echo "✅ Файлы и записи в JSON удалены."
echo "⚠️  Осталось вручную удалить/закомментировать блок в docusaurus.config.js"
echo "🧹 Очистка кэша..."
npm run clear