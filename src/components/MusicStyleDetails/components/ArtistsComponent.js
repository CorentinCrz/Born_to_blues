import React from "react";
import { Link } from "react-router-dom";

type Props = {
  musicStyle: string,
  musicStyleDetail: string,
  musicStyleState: any
};

const ArtistsComponent = (props: Props) => {
  const { musicStyleState } = props;
  return (
    <section id="artist">
      <div>
        {musicStyleState.map(musician => (
          <div key={musician.name}>
            <Link
              to={`/${props.musicStyle}/${props.musicStyleDetail}/${
                musician.name
              }`}
            >
              <img src={musician.img} alt={`${musician.name} musician logo`} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistsComponent;
