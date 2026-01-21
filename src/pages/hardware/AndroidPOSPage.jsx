import HardwareProductTemplate from '../../components/hardware/HardwareProductTemplate';
import { hardwareDetails } from '../../data/hardware';

const AndroidPOSPage = () => {
  return <HardwareProductTemplate product={hardwareDetails['android-pos']} />;
};

export default AndroidPOSPage;
