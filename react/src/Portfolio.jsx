import NowShowing    from './sections/NowShowing';
import BehindScenes  from './sections/BehindScenes';
import FilmArchive   from './sections/FilmArchive';
import CastCrew      from './sections/CastCrew';
import ImmersiveBreak from './sections/ImmersiveBreak';
import EndCredits    from './sections/EndCredits';
import FilmFooter    from './sections/FilmFooter';

export default function Portfolio() {
  return (
    <main className="relative w-full bg-[#0B0B0B]">
      <NowShowing    />
      <BehindScenes  />
      <FilmArchive   />
      <CastCrew      />
      <ImmersiveBreak />
      <EndCredits    />
      <FilmFooter    />
    </main>
  );
}