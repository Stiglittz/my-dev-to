import DiscussCard from '../DiscussCard';
import RecentlyQueried from '../RecentlyQueryd';
import TrendingGuides from '../TrendingGuides';
import WatercoolerCard from '../WatercoolerCard';

export default function RightSidebar() {
  return (
    <aside className="w-full px-2 py-3 space-y-4">
      <DiscussCard />
      <WatercoolerCard />
      <TrendingGuides />
      <RecentlyQueried />
    </aside>
  );
};

