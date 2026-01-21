import HardwareProductTemplate from '../../components/hardware/HardwareProductTemplate';
import { hardwareDetails } from '../../data/hardware';

const BluetoothPrinterPage = () => {
  return <HardwareProductTemplate product={hardwareDetails['bluetooth-printer']} />;
};

export default BluetoothPrinterPage;
