import { motion } from 'framer-motion'
import { projection } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { GrowthProjection } from '../components/Charts'
import { rise, stagger } from '../components/motion'

export default function S08Projection() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_60%_100%,rgba(92,227,229,0.16),transparent_70%)]" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={13}>{projection.label}</Label>
        </motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[24ch]">
          <Rich text={projection.title} />
        </motion.h2>

        <motion.div variants={rise} className="frost cmp-p mt-8 p-4 sm:p-6 lg:mt-auto lg:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/75">
            {projection.layers.map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-[3px]" style={{ background: ['rgba(255,255,255,.25)', 'rgba(92,227,229,.35)', 'rgba(92,227,229,.6)', '#5CE3E5'][i] }} />
                {l}
              </span>
            ))}
            <span className="flex items-center gap-2 font-semibold text-white">
              <span className="h-[3px] w-5 rounded-full bg-white" />
              {projection.profit}
            </span>
            <span className="ml-auto text-[12px] text-white/45">Ilustrativo</span>
          </div>
          <div className="cmp-chart mx-auto max-h-[44vh] w-full max-w-[1100px] [&>svg]:max-h-[44vh]">
            <GrowthProjection layers={projection.layers} profit={projection.profit} x={projection.x} />
          </div>
        </motion.div>
        <motion.p variants={rise} className="mt-3 text-[12px] text-white/55">
          {projection.note}
        </motion.p>
      </motion.div>
    </div>
  )
}
