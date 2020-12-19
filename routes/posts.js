import express from 'express';

import { getVideo, getVideo2, createVideo} from '../controllers/videos.js';

const router = express.Router();

router.get('/v1', getVideo);
router.get('/v2', getVideo2);
router.post('/v2',createVideo)

export default router;




