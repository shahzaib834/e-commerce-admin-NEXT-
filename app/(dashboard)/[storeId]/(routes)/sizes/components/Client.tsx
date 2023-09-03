'use client';

import { Plus } from 'lucide-react';
import Heading from '../../../../../../components/ui/Heading';
import { Button } from '../../../../../../components/ui/button';
import { Separator } from '../../../../../../components/ui/separator';
import { useParams, useRouter } from 'next/navigation';
import { SizeColumn, columns } from './Columns';
import { DataTable } from '@/components/ui/DataTable';
import ApiList from '@/components/ui/ApiList';

interface SizeClientProps {
  data: SizeColumn[];
}

const SizeClient: React.FC<SizeClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Sizes (${data.length})`}
          description='Manage Sizes for your store'
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey='name' />
      <Heading title='API' description='API calls for sizes' />
      <Separator />
      <ApiList entityName='sizes' entityIdName='sizeId' />
    </>
  );
};

export default SizeClient;
