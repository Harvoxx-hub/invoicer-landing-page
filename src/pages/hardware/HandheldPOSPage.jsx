import HardwareProductTemplate from '../../components/hardware/HardwareProductTemplate';
import { hardwareDetails } from '../../data/hardware';

const HandheldPOSPage = () => {
  return <HardwareProductTemplate product={hardwareDetails['handheld-pos']} />;
};

export default HandheldPOSPage;
