import { InfoHeaderText } from "../../components/InfoHeaderText";
import { InfoTile } from "../../components/InfoTile";

export const VolunteerView = () => {
  return (
    <div className='my-8 flex flex-col lg:items-center'>
      <InfoHeaderText>Get Involved</InfoHeaderText>
      <InfoTile>
        <p>
          We are a non-profit event and are staffed entirely by volunteers. Any
          extra help is welcome. Minimum age for volunteering is 16. Interested
          in volunteering? Visit the{" "}
          <a
            className='text-blue-primary underline'
            target='_blank'
            rel='noreferrer'
            href='https://m.facebook.com/Deadwoods-254072839802985/?ref=bookmarks'
          >
            Deadwoods' Facebook page
          </a>{" "}
          or send an email to admin@deadwoods.org for more information.
        </p>
      </InfoTile>
      <InfoHeaderText>
        <h1>Volunteer</h1>
        <h1>Possibilities</h1>
      </InfoHeaderText>
      <InfoTile>
        <div className='text-left font-bold'>
          <li className='mb-4'>
            Scarer - Dressing in character and acting in a scene, or roaming
            around a corn trail
          </li>
          <li className='mb-4'>
            Go-For - Helping bring supplies or refreshments to volunteers in
            scenes
          </li>
          <li className='mb-4'>
            Front of House - Selling tickets, parking vehicles, helping guests
            with questions, etc.
          </li>
          <li className='mb-4'>
            Working behind the scenes to run props or effects
          </li>
        </div>
      </InfoTile>
    </div>
  );
};
