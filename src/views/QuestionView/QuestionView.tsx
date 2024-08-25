// import { ImageCarousel } from "../../components/ImageCarousel/ImageCarousel";
import { InfoHeaderText } from "../../components/InfoHeaderText";
import { InfoTile } from "../../components/InfoTile";
import { QuestionAsked } from "./QuestionAsked";

export const QuestionView = () => {
  return (
    <div className='h-full flex flex-col lg:items-center'>
      <InfoHeaderText>Admission </InfoHeaderText>
      <InfoTile>
        Tickets are $10 per person. Children ages 10 and under are free. Tickets
        can be purchased with cash or Venmo the night of the event. Tickets must
        be purchased on site. Proceeds will benefit The Stainbrook Foundation.
      </InfoTile>
      <InfoHeaderText>The Stainbrook Foundation </InfoHeaderText>
      <InfoTile>
        The Stainbrook Foundation is a non-profit organization that was created
        to enhance the communities of the Prairie View school district
        year-round. We have given out scholarships, Christmas gifts for the
        local Christmas drive and provided access to eyecare and other
        necessities for children in our communities.
      </InfoTile>
      {/* <ImageCarousel /> */}
      <InfoHeaderText>Frequently Asked Questions</InfoHeaderText>
      <InfoTile>
        <QuestionAsked>Is The Deadwoods open rain or shine?</QuestionAsked>
        <div className='text-sm'>
          No. This attraction is entirely outdoors, and therefore will be
          weather dependent. Light rain or cold weather will not affect this
          event but heavy downpours or other extreme conditions may. Check here
          in the days leading up to the event for weather cancellation
          information. November 6th will be our make up day.
        </div>
      </InfoTile>
      <InfoTile>
        <QuestionAsked>What is the best time to arrive?</QuestionAsked>
        <div className='text-sm'>
          Gates open at 7:00pm, with the first groups entering the attraction at
          sundown.
        </div>
      </InfoTile>
      <InfoTile>
        <QuestionAsked>Are there any age restrictions?</QuestionAsked>
        <div className='text-sm'>
          We recommend that children under the age of 14 be acommpanied by an
          adult. The attraction is intended to be frightening, so young children
          may become upset or scared. You know your child better than anyone -
          the decision is up to you.
        </div>
      </InfoTile>
      <InfoTile>
        <QuestionAsked>What is the parking situation?</QuestionAsked>
        <div className='text-sm'>
          There is ample parking available with no extra cost. Vehicles will be
          parked on flat, grassy terrain - not on pavement or gravel. Keep this
          in mind if the ground is soggy from rain.
        </div>
      </InfoTile>
      <InfoTile>
        <QuestionAsked>Will there be restrooms available?</QuestionAsked>
        <div className='text-sm'>
          Yes, we will provide portable toilets for public use.
        </div>
      </InfoTile>
      <InfoTile>
        <QuestionAsked>Can tickets be purchased in advance?</QuestionAsked>
        <div className='text-sm'>
          No, tickets must be purchased on site the night of the event.
        </div>
      </InfoTile>
    </div>
  );
};
