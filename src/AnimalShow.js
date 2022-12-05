import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

function AnimalShow({type}){
    return <div> <img alt="notimportant" src={svgs[type]}/> </div>
};

const svgs = {
    bird,cat,cow,dog,gator,heart,horse
};

export default AnimalShow;