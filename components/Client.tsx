'use client';

import { Plus } from 'lucide-react';
import Heading from './ui/Heading';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useParams, useRouter } from 'next/navigation';

const BillBoardClient = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title='BillBoards (0)'
          description='Manage billboards for your store'
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default BillBoardClient;