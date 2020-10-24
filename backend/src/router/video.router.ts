import {Router} from 'express'
import {getVideos, getOneVideos, createVideos, deleteVideos, UpdateVideos} from '../controller/VideoController'

const router = Router()

router.get('/api/videos',getVideos)
router.post('/api/videos',createVideos)
router.get('/api/videos/:id',getOneVideos)
router.delete('/api/videos/:id',deleteVideos)
router.put('/api/videos/:id/edit',UpdateVideos)

export default router