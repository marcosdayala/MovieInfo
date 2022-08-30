import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const stars = (ranking: number) => {
  switch (ranking) {
    case 1:
    case 2:
      return (
      <div className='stars'>
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
      );
    case 3:
    case 4:
      return (
        <div className='stars'>
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        );
    case 5:
    case 6:
      return (
        <div className='stars'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        );
    case 7:
    case 8:
      return (
        <div className='stars'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        );
    case 9:
    case 10:
      return (
        <div className='stars'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        );
    default:
      return 'NR'
  }
}

const StarsRanking = (vote_average: { vote_average: number; }) => {
  let ranking = Math.round(vote_average.vote_average)

  return (
    <div className='ranking'>
      {stars(ranking)}
      <h4>{`${ranking} / 10`}</h4>
    </div>
  )
}

export default StarsRanking