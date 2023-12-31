'use client';

import { Plus } from 'lucide-react';
import Heading from '../../../../../../components/ui/Heading';
import { Button } from '../../../../../../components/ui/button';
import { Separator } from '../../../../../../components/ui/separator';
import { useParams, useRouter } from 'next/navigation';
import { BillBoardColumn, columns } from './Columns';
import { DataTable } from '@/components/ui/DataTable';
import ApiList from '@/components/ui/ApiList';

interface BillBoardClientProps {
  data: BillBoardColumn[];
}

const BillBoardClient: React.FC<BillBoardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`BillBoards (${data.length})`}
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
      <DataTable columns={columns} data={data} searchKey='label' />
      <Heading title='API' description='API calls for Billboards' />
      <Separator />
      <ApiList entityName='billboards' entityIdName='billboardId' />
    </>
  );
};

export default BillBoardClient;
