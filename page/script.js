document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const lootResult = document.getElementById('lootResult');
    const levelInput = document.getElementById('level');
    const raritySelect = document.getElementById('rarity');

    // Списки лута (замените своими данными!)
    const lootData = {
        common: ['Меч кражи жизни', 'Свиток заклинания', 'Волшебная палочка секретов', 'Зелье большого лечения', 'Полупрозрачный тигровый глаз', 'Непрозрачный родохрозит', 'Серо-чёрный гематит', 'Чёрная бархатная маска', 'Одеяние из золотой парчи', 'Пара гравированных игральных костей', 'Маленький золотой браслет', 'Резная статуэтка из кости', 'Шлем понимания языков', 'Шапка подводного дыхания', 'Непрозрачный гелиотроп'],
        uncommon: ['Шапка маскировки', 'Трезубец командования рыбами', 'Одеяние из золотой парчи', 'Сумка фокусов (рыжая)', 'Очки очарования', 'Повязка интеллекта', 'Посох питона', 'Меч мести', 'Волшебная палочка снарядов', 'Свирель канализации', 'Зелье большого лечения x2', 'Эльфийская кольчуга', 'Свиток заклинания (2 уровень)', 'Большой мастерски вытканный гобелен'],
        rare: ['Колокольчик открывания', 'Пластинчатый доспех', 'Зелье отличного лечения', 'Зелье неуязвимости', 'Перо Кваля', 'Свиток заклинания (6 уровень)', 'Свиток заклинания (7 уровень)', 'Полупрозрачный чёрный опал', 'Полупрозрачный звёздчатый сапфир', 'Зелье живучести', 'Зелье скорости', 'Сумеречно синий голубой сапфир', 'Зелье силы штормового великана', 'Универсальный растворитель']
    };

    generateButton.addEventListener('click', function () {
        const level = parseInt(levelInput.value);
        const rarity = raritySelect.value;

        // Проверка уровня
        if (isNaN(level) || level <= 0) {
            lootResult.querySelector(".loot-result-text").textContent = 'Введите корректный уровень.';
            return;
        }

        // Генерация лута (простая версия)
        const availableLoot = lootData[rarity];
        if (availableLoot && availableLoot.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableLoot.length);
            const generatedLoot = availableLoot[randomIndex];
            lootResult.querySelector(".loot-result-text").textContent = `Вы нашли: ${generatedLoot} (Редкость: ${rarity})`;
        } else {
            lootResult.querySelector(".loot-result-text").textContent = 'Не удалось сгенерировать лут.';
        }
    });
});

