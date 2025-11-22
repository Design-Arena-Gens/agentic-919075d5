import { channelHighlights } from '@lib/channel-data';
import styles from './ChannelStats.module.css';

export function ChannelStats() {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.grid} surface`}>
        {channelHighlights.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
