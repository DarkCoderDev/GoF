/**
 * @description
 * Отделяет конструирование сложного объекта от его представления так,
 * что в результате одного и того же процесса
 * конструирования могут получаться разные представления.
 *
 * @author DarkCoderDev (https://github.com/DarkCoderDev)
 * @author adideas (https://github.com/adideas)
 */

class Builder {
    #article = {};
    #separator = '\n\t';

    addTitle(title) {
        this.#article.title = title;
        return this;
    }

    addDescription(description) {
        this.#article.description = description;
        return this;
    }

    addFooter(footer) {
        this.#article.footer = footer;
        return this;
    }

    build() {
        const parts = Object.values(this.#article);
        return parts.join(this.#separator);
    }
}

