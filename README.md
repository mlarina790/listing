Список предложений
Необходимо вывести список предложений каталога Etsy.com, используя библиотеку React. После загрузки данных и отрисовки список должен выглядеть так: Список предложений

Данные списка предложений
Данные для списка доступны в формате JSON в каталоге data. Вам нужно их скопировать и хранить в виде константы в переменной (для создания JS-объектов используйте JSON.parse).

Это массив объектов, каждый объект представляет одно предложение. У предложение доступно множество свойств, но в приложении необходимо использовать следующие:

listing_id — уникальный идентификатор предложения, число;
url — ссылка на предложение, строка;
MainImage — информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
title — название предложения, строка;
currency_code — код валюты, строка;
price — цена, строка;
quantity — доступное количество, число.
Описание компонента
Для отображения списка создайте компонент Listing, который принимает следующие атрибуты:

items — список предложений, массив объектов, по умолчанию пустой массив.
Компонент должен создавать на основе списка предложений следующий HTML-код:


Если название предложения привышает 50 символов, то необходимо выводить только первые 50 символов, и добавлять символ … в конце.

При выводе стоимости предложения необходимо учитывать валюту. Если цена задана:

в долларах США, код USD, то цену вывести в формате $50.00;
в евро, код EUR, то цену вывести в формате €50.00;
в остальных случаях цену вывести в формате 50.00 GBP, где GBP — код валюты.
Вывести остаток, подсветив его в зависимости от количества, используя класс level-*:

level-low — если остаток меньше 10 включительно,
level-medium — если остаток меньше 20 включительно,
level-high — если остаток больше 20.
Реализация
Необходимо отобразить данные списка предложений, используя компонент Listing.

Используйте приложенный css-файл для стилизации.
