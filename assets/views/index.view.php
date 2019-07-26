<!DOCTYPE html>
<html>
    <head>
        <title>Jumia - Phones</title>
    </head>

    <body>
        <h1>Phone Numbers</h1>
        <form method="GET" action="/">
            <select name="country">
                <option value="">Select country</option>
                <option value="Morocco">Morroco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Uganda">Uganda</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Cameroon">Cameroon</option>
            </select>

            <select name="state">
                <option value="">Valid phone numbers</option>
                <option value="true">Valid</option>
                <option value="false">Invalid</option>
            </select>

            <button type="submit">Filter</button>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>State</th>
                        <th>Country code</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                <?php foreach($phones as $phone) : ?>
                    <tr>
                        <td><?= $phone['country'] ?></td>
                        <td><?= $phone['state'] ? 'OK' : 'NOK' ?></td>
                        <td><?= $phone['code'] ?></td>
                        <td><?= $phone['number'] ?></td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        </form>
    </body>
</html>