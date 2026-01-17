import { useState, useEffect } from 'react';
import { getProspects } from '../../helpers/apiAccess'
import LoadingSpinner from '../components/LoadingSpinner';
import TitledContentBox from '../components/TitledContentBox';
function Prospects() {

  const [loading, setLoading] = useState(true)
  const [prospects, setProspects] = useState([])

  const loadProspects = () => {
    getProspects(prospectsLoaded)
  }

  const prospectsLoaded = (data) => {
    setProspects(data)
    setLoading(false)
  }

  useEffect(() => {
    loadProspects()
  }, []);


  return (
    <div>
      <div className="panelHeader">Prospects</div>
      {
        loading ?
          <LoadingSpinner />
          :
          <div className="panelBody">
            {prospects.map(p =>
              <TitledContentBox mode='PROSPECT' obj={p} title={p.FirstName + ' ' + p.Surname} />
            )}
          </div>
      }
    </div>
  )
}

export default Prospects