class SortifyManager {

    static instance;

    constructor(){
        if(SortifyManager.instance){
            return SortifyManager.instance;
        }

        SortifyManager.instance = this;
    }

}

export default SortifyManager