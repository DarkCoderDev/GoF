/**
 * @description
 * порождающий шаблон проектирования, предоставляющий подклассам
 * (дочерним классам) интерфейс для создания экземпляров некоторого класса.
 * В момент создания наследники могут определить, какой класс создавать.
 * Иными словами, данный шаблон делегирует создание объектов наследникам родительского класса.
 * Это позволяет использовать в коде программы не конкретные классы, а манипулировать
 * абстрактными объектами на более высоком уровне.
 *
 * @author DarkCoderDev (https://github.com/DarkCoderDev)
 * @author adideas (https://github.com/adideas)
 */

/**
 * Factory Interface
 */
class FactoryInterface {
    constructor() {
        if (this.constructor === FactoryInterface) {
            throw new Error("You can't use interface as class");
        }
    }
    getName() {}
}

class FactoryA extends FactoryInterface {
    constructor() {
        super();
    }
    getName() {
        return "FactoryA";
    }
}

class FactoryB extends FactoryInterface {
    constructor() {
        super();
    }
    getName() {
        return "FactoryB";
    }
}

class FactoryMethod {
    getFactory(bool) {
        return bool
            ? new FactoryA()
            : new FactoryB()
    }
}

console.log(new FactoryMethod().getFactory(true).getName());