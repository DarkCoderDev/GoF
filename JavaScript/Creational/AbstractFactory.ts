/**
 * @description
 * порождающий шаблон проектирования, предоставляет интерфейс для создания семейств
 * взаимосвязанных или взаимозависимых объектов, не специфицируя их конкретных классов.
 * Шаблон реализуется созданием абстрактного класса Factory, который представляет
 * собой интерфейс для создания компонентов системы (например, для оконного интерфейса
 * он может создавать окна и кнопки). Затем пишутся классы, реализующие этот интерфейс.
 *
 * @author DarkCoderDev (https://github.com/DarkCoderDev)
 * @author adideas (https://github.com/adideas)
 */


interface AbstractFactory {
    createBig(): AbstractProduct
    createSmall(): AbstractProduct
}

interface AbstractProduct {}
interface AbstractCar extends AbstractProduct {}
interface AbstractPlane extends AbstractProduct {}

class CarFactory implements AbstractFactory {
    createBig(): AbstractCar {
        return new Hammer();
    }
    createSmall(): AbstractCar {
        return new MINICooper();
    }
}

class PlaneFactory implements AbstractFactory {
    createBig(): AbstractPlane {
        return new AirbusA380();
    }
    createSmall(): AbstractPlane {
        return new Cessna172();
    }
}


class Hammer implements AbstractCar {}
class MINICooper implements AbstractCar {}

class AirbusA380 implements AbstractPlane {}
class Cessna172 implements AbstractPlane {}

//

class Client {
    constructor(factory: AbstractFactory) {
        factory.createBig();
    }
}

new Client(new CarFactory())