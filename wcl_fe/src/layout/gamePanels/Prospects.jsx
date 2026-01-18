import { useState, useEffect } from 'react';
import { getProspects } from '../../helpers/apiAccess'
import { cloneArrayAndPush } from '../../helpers/jsHelpers'
import LoadingSpinner from '../components/LoadingSpinner';
import TitledContentBox from '../components/TitledContentBox';
function Prospects() {

  const [loading, setLoading] = useState(true)
  const [prospects, setProspects] = useState([])
  const [assignedList, setAssignedList] = useState([])

  const loadProspects = () => {
    getProspects(prospectsLoaded)
  }

  const prospectsLoaded = (data) => {
    setProspects(data)
    setLoading(false)
  }

  const prospectAssigned = (id) => {
    setAssignedList(cloneArrayAndPush(assignedList, id))
    var xx = 1;
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
              <TitledContentBox key={p.Id} mode='PROSPECT' obj={p} title={p.FirstName + ' ' + p.Surname}
                primaryCallback={prospectAssigned} metaData={assignedList.includes(p.Id) ? true : false} />
            )}
          </div>
      }
    </div>
  )
}

export default Prospects