/**
 * @description
 * порождающий шаблон проектирования, гарантирующий,
 * что в однопоточном приложении будет единственный
 * экземпляр некоторого класса, и предоставляющий
 * глобальную точку доступа к этому экземпляру.
 *
 * @author DarkCoderDev (https://github.com/DarkCoderDev)
 * @author adideas (https://github.com/adideas)
 */

class Singleton {
    static instance;

    constructor() {
        return Singleton.instance &&= new Singleton();
    }
}