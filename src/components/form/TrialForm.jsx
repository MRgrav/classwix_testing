import Card from '../Card'
import CardContent from '../CardContent'

export default function TrialForm() {
  return (
    <div>
        <Card >
            <CardContent >
                <Form action="#" method="post">
                    <div class='grid grid-cols-2'>
                        <div>
                            <label htmlFor="">Name</label>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                </Form>
            </CardContent>
        </Card>
    </div>
  )
}
