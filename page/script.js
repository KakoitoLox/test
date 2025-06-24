document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const lootResult = document.getElementById('lootResult');
    const levelInput = document.getElementById('level');
    const raritySelect = document.getElementById('rarity');

    // ������ ���� (�������� ������ �������!)
    const lootData = {
        common: ['��� ����� �����', '������ ����������', '��������� ������� ��������', '����� �������� �������', '�������������� �������� ����', '������������ ����������', '����-������ �������', '׸���� ��������� �����', '������� �� ������� �����', '���� ������������� ��������� ������', '��������� ������� �������', '������ ��������� �� �����', '���� ��������� ������', '����� ���������� �������', '������������ ���������'],
        uncommon: ['����� ����������', '�������� ������������ ������', '������� �� ������� �����', '����� ������� (�����)', '���� ����������', '������� ����������', '����� ������', '��� �����', '��������� ������� ��������', '������� �����������', '����� �������� ������� x2', '���������� ��������', '������ ���������� (2 �������)', '������� ��������� ��������� �������'],
        rare: ['����������� ����������', '������������ ������', '����� ��������� �������', '����� ������������', '���� �����', '������ ���������� (6 �������)', '������ ���������� (7 �������)', '�������������� ������ ����', '�������������� ��������� ������', '����� ���������', '����� ��������', '��������� ����� ������� ������', '����� ���� ���������� ��������', '������������� ������������']
    };

    generateButton.addEventListener('click', function () {
        const level = parseInt(levelInput.value);
        const rarity = raritySelect.value;

        // �������� ������
        if (isNaN(level) || level <= 0) {
            lootResult.querySelector(".loot-result-text").textContent = '������� ���������� �������.';
            return;
        }

        // ��������� ���� (������� ������)
        const availableLoot = lootData[rarity];
        if (availableLoot && availableLoot.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableLoot.length);
            const generatedLoot = availableLoot[randomIndex];
            lootResult.querySelector(".loot-result-text").textContent = `�� �����: ${generatedLoot} (��������: ${rarity})`;
        } else {
            lootResult.querySelector(".loot-result-text").textContent = '�� ������� ������������� ���.';
        }
    });
});

