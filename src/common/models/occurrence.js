import Indicia from 'indicia';
import CONFIG from 'config';
import appModel from 'app_model';
import ImageModel from './image';

export default Indicia.Occurrence.extend({
  Image: ImageModel,

  keys: CONFIG.indicia.occurrence, // warehouse attribute keys

  metadata() {
    return {
      training: appModel.get('useTraining'),
      release_status: 'P',
      sensitive: 't',
      sensitivity_precision: 100000,
    };
  },
});
