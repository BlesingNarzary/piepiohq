import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Header } from '~/components/header/Header';

export const meta: MetaFunction = () => {
  return [{ title: 'Piepio Dashboard' }, { name: 'description', content: 'Build with Piepio, your AI engineer' }];
};

export const loader = () => json({});

export default function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
    </div>
  );
}

