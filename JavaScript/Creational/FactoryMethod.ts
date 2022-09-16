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

interface Factory {
    getName(): string
}

class FactoryA implements Factory {
    getName(): string {
        return "FactoryA";
    }
}

class FactoryB implements Factory {
    getName(): string {
        return "FactoryB";
    }
}

class FactoryMethod {
    getFactory(bool): Factory {
        return bool
            ? new FactoryA()
            : new FactoryB()
    }
}