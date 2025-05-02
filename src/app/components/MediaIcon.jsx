import media from "../consts/media";

export default ({ name }) => {
    return <a href={media[name]} className="media">
            <img src={`/images/icons/${name}.svg`} alt={name} className="media__icon"/>
        </a>
};
