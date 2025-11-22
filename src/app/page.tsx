import { ChannelHero } from '@components/ChannelHero';
import { ChannelStats } from '@components/ChannelStats';
import { CollaborationSpotlight } from '@components/CollaborationSpotlight';
import { PlaylistShowcase } from '@components/PlaylistShowcase';
import { VideoGrid } from '@components/VideoGrid';

export default function HomePage() {
  return (
    <main>
      <ChannelHero />
      <ChannelStats />
      <VideoGrid />
      <PlaylistShowcase />
      <CollaborationSpotlight />
    </main>
  );
}
